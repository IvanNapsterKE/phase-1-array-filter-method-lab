function findMatching(driver, matchName) {
    return driver.filter(
      (match) => match.toLowerCase() === matchName.toLowerCase()
    );
  }
  
  function fuzzyMatch(driver, testName) {
    return driver.filter(
      (match) =>
        match.toLowerCase().indexOf(testName.toLowerCase()) === 0
    );
  }
  
  function matchName(source, name) {
    return source.filter((drivers) => drivers.name === name);
  }