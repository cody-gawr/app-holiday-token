import createRepositories from "~/repositories";

export default ({ store, $axios }, inject) => {
  inject('repositories', createRepositories(store, $axios));
}
