const url = "https://api.github.com/users/diego3g/repos";

function getRepoData() {
  const repoCount = Math.floor(Math.random() * 30 + 1);

  axios
    .get(url)
    .then((response) => {
      const repoName = response.data[repoCount].name;
      const repoDescription = response.data[repoCount].description;
      const starCount = response.data[repoCount].stargazers_count;
      const forkCount = response.data[repoCount].forks_count;
      const usedLanguage = response.data[repoCount].language;

      repositoryname.textContent = repoName;
      repositorydescription.textContent = repoDescription;
      starcount.textContent = starCount;
      forkcount.textContent = forkCount;
      language.textContent = usedLanguage;
    })

    .catch((error) => console.log(error));
}

getRepoData();
