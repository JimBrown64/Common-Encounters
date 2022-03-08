const sortCreatures = (creatures) => {
  const sortedByCR = creatures.sort((a, b) => a.CR - b.CR)
  const sortedByName = sortedByCR.sort((a, b) => {
    if (a.CR === b.CR) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  });
  return sortedByName
}

export default sortCreatures