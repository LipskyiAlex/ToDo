export const selectUser = state => state.auth.user;
export const selectName = state => state.auth.user.name;
export const selectIsLogged = state =>  state.auth.isLogged;
export const selectIsRefreshing = state => state.auth.isRefreshing;