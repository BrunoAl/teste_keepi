import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/'

export const listRepoFilesRequest = (repoUserName, repoName, repoDir) => axios(`/listFiles/${repoUserName}/${repoName}/${repoDir}`)
