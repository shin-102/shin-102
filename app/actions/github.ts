"use server";

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
