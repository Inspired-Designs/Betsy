const toggleExpansion = (state, setter) => {
  return () => {
    // setExpandedReturn(false);
    // setExpandedMaterial(false);
    // setExpandedProcessing(false);
    // setExpandedCare(false);
    // setExpandedLost(false);
    // setExpandedDefect(false);

    setter(!state);
  };
};

export default toggleExpansion