"use client";

import { useEffect, useMemo, useState } from "react";
import { format, getDay, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

const GITHUB_USERNAME = "Sameer-472";
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

const LEVELS = [
  "bg-[#ebedf0] dark:bg-[#161b22]",
  "bg-[#9be9a8] dark:bg-[#0e4429]",
  "bg-[#40c463] dark:bg-[#006d32]",
  "bg-[#30a14e] dark:bg-[#26a641]",
  "bg-[#216e39] dark:bg-[#39d353]",
];

function toWeeks(contributions) {
  const weeks = [];
  let current = [];
  const leadingEmptyDays = getDay(parseISO(contributions[0].date));

  for (let i = 0; i < leadingEmptyDays; i += 1) current.push(null);

  contributions.forEach((day) => {
    current.push(day);
    if (current.length === 7) {
      weeks.push(current);
      current = [];
    }
  });

  if (current.length) {
    while (current.length < 7) current.push(null);
    weeks.push(current);
  }

  return weeks;
}

function monthMarkers(weeks) {
  const markers = [];
  let previousLabel = "";

  weeks.forEach((week, index) => {
    const day = week.find(Boolean);
    if (!day) return;

    const label = format(parseISO(day.date), "MMM");
    const previous = markers[markers.length - 1];
    const hasRoom = !previous || index - previous.index > 2;

    if (label !== previousLabel && hasRoom) {
      markers.push({ index, label });
      previousLabel = label;
    }
  });

  return markers;
}

function contributionLabel(day) {
  const countLabel =
    day.count === 1 ? "1 contribution" : `${day.count} contributions`;
  return `${countLabel} on ${format(parseISO(day.date), "MMM d, yyyy")}`;
}

export default function GitHubGraph() {
  const [contributions, setContributions] = useState(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(CONTRIBUTIONS_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load contributions");
        return response.json();
      })
      .then((data) => {
        setContributions(data.contributions ?? []);
        setTotal(data.total?.lastYear ?? 0);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(true);
      });

    return () => controller.abort();
  }, []);

  const weeks = useMemo(
    () => (contributions?.length ? toWeeks(contributions) : []),
    [contributions]
  );
  const months = useMemo(() => monthMarkers(weeks), [weeks]);

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <SiGithub className="w-6 h-6 text-foreground" />
        <h2 className="text-xl font-semibold text-foreground">
          GitHub Activity
        </h2>
      </div>

      <motion.div
        className="rounded-xl border border-border bg-card px-4 py-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {error ? (
          <p className="text-sm text-muted-foreground">
            Couldn&apos;t load the contribution graph.{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              View it on GitHub
            </a>
          </p>
        ) : !contributions ? (
          <div className="h-[148px] animate-pulse rounded-lg bg-muted" />
        ) : (
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
          >
            <div className="overflow-x-auto">
              <div className="min-w-[680px]">
                <div className="mb-2 ml-8 flex h-4">
                  {weeks.map((_, index) => {
                    const marker = months.find((month) => month.index === index);
                    return (
                      <div
                        key={index}
                        className="flex-1 text-[10px] leading-4 text-muted-foreground"
                      >
                        {marker?.label ?? ""}
                      </div>
                    );
                  })}
                </div>

                <div className="flex">
                  <div className="mr-2 flex w-6 flex-col justify-between text-[10px] leading-none text-muted-foreground">
                    <span className="h-[11px]" />
                    <span>Mon</span>
                    <span className="h-[11px]" />
                    <span>Wed</span>
                    <span className="h-[11px]" />
                    <span>Fri</span>
                    <span className="h-[11px]" />
                  </div>

                  <div className="flex flex-1 gap-[3px]">
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-1 flex-col gap-[3px]">
                        {week.map((day, dayIndex) =>
                          day ? (
                            <span
                              key={day.date}
                              title={contributionLabel(day)}
                              onMouseEnter={() => setHovered(day)}
                              onMouseLeave={() => setHovered(null)}
                              className={`aspect-square rounded-[2px] ${LEVELS[day.level] ?? LEVELS[0]}`}
                            />
                          ) : (
                            <span
                              key={`empty-${weekIndex}-${dayIndex}`}
                              className="aspect-square"
                            />
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>
                {hovered
                  ? contributionLabel(hovered)
                  : `${total.toLocaleString()} contributions in the last year`}
              </span>
              <span className="flex items-center gap-1">
                Less
                {LEVELS.map((level) => (
                  <span
                    key={level}
                    className={`h-[11px] w-[11px] rounded-[2px] ${level}`}
                  />
                ))}
                More
              </span>
            </div>
          </a>
        )}
      </motion.div>
    </section>
  );
}
