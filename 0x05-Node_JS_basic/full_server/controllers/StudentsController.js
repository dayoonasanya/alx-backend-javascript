import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';
      const fields = Object.keys(database).sort();

      fields.forEach(field => {
        response += `Number of students in ${field}: ${database[field].length}. List: ${database[field].join(', ')}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const database = await readDatabase(process.argv[2]);
      const students = database[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
