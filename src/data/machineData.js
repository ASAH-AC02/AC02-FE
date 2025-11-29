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

// Temp
export const sampleMachines = [
  {
    id: 1,
    machine_id: 'M_H_01',
    air_temperature: 304.1,
    process_temperature: 308.6,
    rotational_speed: 1551,
    torque: 42.8,
    tool_wear: 0,
    type: 'M',
    description: 'Normal Operation - Healthy Machine'
  },
  {
    id: 2,
    machine_id: 'M_L_15',
    air_temperature: 302.5,
    process_temperature: 312.8,
    rotational_speed: 1400,
    torque: 55.2,
    tool_wear: 150,
    type: 'L',
    description: 'Medium Wear - Warning Signs'
  },
  {
    id: 3,
    machine_id: 'M_H_23',
    air_temperature: 305.0,
    process_temperature: 318.5,
    rotational_speed: 1200,
    torque: 68.5,
    tool_wear: 220,
    type: 'H',
    description: 'High Stress - Critical Condition'
  },
  {
    id: 4,
    machine_id: 'M_M_08',
    air_temperature: 296.8,
    process_temperature: 307.2,
    rotational_speed: 1650,
    torque: 38.4,
    tool_wear: 45,
    type: 'M',
    description: 'Optimal Parameters - Good Health'
  },
  {
    id: 5,
    machine_id: 'M_L_32',
    air_temperature: 308.2,
    process_temperature: 322.0,
    rotational_speed: 1100,
    torque: 72.3,
    tool_wear: 280,
    type: 'L',
    description: 'Extreme Conditions - Immediate Attention Required'
  },
  {
    id: 6,
    machine_id: 'M_H_09',
    air_temperature: 304.1,
    process_temperature: 308.6,
    rotational_speed: 1551,
    torque: 42.8,
    tool_wear: 0,
    type: 'M',
    description: 'Normal Operation - Healthy Machine'
  },
  {
    id: 7,
    machine_id: 'M_L_19',
    air_temperature: 302.5,
    process_temperature: 312.8,
    rotational_speed: 1400,
    torque: 55.2,
    tool_wear: 150,
    type: 'L',
    description: 'Medium Wear - Warning Signs'
  },
  {
    id: 8,
    machine_id: 'M_H_29',
    air_temperature: 305.0,
    process_temperature: 318.5,
    rotational_speed: 1200,
    torque: 68.5,
    tool_wear: 220,
    type: 'H',
    description: 'High Stress - Critical Condition'
  },
  {
    id: 9,
    machine_id: 'M_M_09',
    air_temperature: 296.8,
    process_temperature: 307.2,
    rotational_speed: 1650,
    torque: 38.4,
    tool_wear: 45,
    type: 'M',
    description: 'Optimal Parameters - Good Health'
  },
  {
    id: 10,
    machine_id: 'M_L_39',
    air_temperature: 308.2,
    process_temperature: 322.0,
    rotational_speed: 1100,
    torque: 72.3,
    tool_wear: 280,
    type: 'L',
    description: 'Extreme Conditions - Immediate Attention Required'
  }
];