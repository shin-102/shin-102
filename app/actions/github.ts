"use server";

import fs from "fs";
import path from "path";

export async function getGithubContributions() {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionLevel
                date
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { username: "shin-102" },
    }),
    next: { revalidate: 86400 }, // Refresh data every 24 hours
  });

  const data = await response.json();
  return data.data.user.contributionsCollection.contributionCalendar;
}

export async function getSvgCommits(): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), "github-metrics.svg");
    const svgContent = fs.readFileSync(filePath, "utf8");

    const match = svgContent.match(/(\d+)\s+Commits/i);
    if (match && match[1]) {
      return `${Number(match[1]).toLocaleString()}+`;
    }
  } catch (error) {
    console.error("Failed to read github-metrics.svg", error);
  }

  return "312+";
}