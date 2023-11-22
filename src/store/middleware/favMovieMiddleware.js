export const movieWare = (store) => (next) => (action) => {
    console.log("[Middleware] Şimdiki state:", store.getState());
    console.log("[Middleware] dispatch edilecek:", action);
    const result = next(action);
    console.log("[Middleware] Sonraki state:", store.getState());
    return result;
  };