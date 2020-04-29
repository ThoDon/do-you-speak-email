export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Hey ! J'ai mis ce site à jour avec de nouvelles infos/ corrections !` +
      `Voulez-vous afficher la dernière version ?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
