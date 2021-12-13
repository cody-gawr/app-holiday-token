import createRepositories from "~/repositories";

export default ({ store, $axios }, inject) => {
  inject('repositories', createRepository(store, $axios));
}
