const { parseCSV } = require('../utils/csvParser');
const ClassSchedule = require('../models/ClassSchedule');
const Student = require('../models/Student');
const Instructor = require('../models/Instructor');
const ClassType = require('../models/ClassType');

exports.processCSV = async (filePath) => {
  const rows = await parseCSV(filePath);
  const responses = [];

  for (const row of rows) {
    try {
      if (row.action === 'new') {
        const result = await createSchedule(row);
        responses.push({ status: 'success', id: result._id });
      }

      if (row.action === 'update') {
        await updateSchedule(row);
        responses.push({ status: 'success', message: 'Updated' });
      }

      if (row.action === 'delete') {
        await ClassSchedule.findByIdAndDelete(row.registrationId);
        responses.push({ status: 'success', message: 'Deleted' });
      }
    } catch (err) {
      responses.push({ status: 'error', reason: err.message });
    }
  }

  return responses;
};
