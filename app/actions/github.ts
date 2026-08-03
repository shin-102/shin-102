"use server";

export async function getGithubContributions() {
  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
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
      next: { revalidate: 86400 }, // 24 hours
    });

    const data = await response.json();

    // If GitHub returned errors or missing data, log and return safe fallback
    if (data.errors || !data?.data?.user) {
      console.error("GitHub API Error:", data.errors || "User data missing");
      return {
        calendar: null,
        totalCommits: "1,000+",
      };
    }

    const collection = data.data.user.contributionsCollection;
    const totalCommits =
      (collection.totalCommitContributions || 0) +
      (collection.restrictedContributionsCount || 0);

    return {
      calendar: collection.contributionCalendar,
      totalCommits: `${totalCommits.toLocaleString()}+`,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return {
      calendar: null,
      totalCommits: "1,000+",
    };
  }
}