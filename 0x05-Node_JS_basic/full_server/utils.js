import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter(line => line);
    const studentGroups = {};

    lines.forEach(line => {
      const [firstname, field] = line.split(',');
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      studentGroups[field].push(firstname);
    });

    return studentGroups;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

