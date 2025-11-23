export const generateMachineData = (count = 70) => {
  const types = ['M', 'L', 'H'];
  const data = [];

  for (let i = 0; i < count; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const productName = `${type}${14860 + i}`;
    
    data.push({
      id: i + 1,
      productName,
      type,
      airTemp: `${(298 + Math.random() * 0.5).toFixed(1)} K`,
      processTemp: `${(308 + Math.random() * 0.5).toFixed(1)} K`,
      rotationalSpeed: `${Math.floor(1400 + Math.random() * 200)} rpm`,
      torque: `${(40 + Math.random() * 10).toFixed(1)} Nm`,
      toolWear: `${Math.floor(Math.random() * 10)} Min`,
    });
  }

  return data;
};

export const machineData = generateMachineData(70);
