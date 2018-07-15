export const DATABASE_COLLECTIONS = {
  Activity: {
    _id: '',
    activityName: '',
    tableOptions: [
      {
        value: 'What',
        type: 'input',
        placeholder: 'Enter activity name...',
        className: 'form-control',
      },
      {
        value: 'Value',
        type: 'input',
        placeholder: 'Enter activity value...',
        className: 'form-control',
      },
      {
        value: 'Action',
        type: 'button',
        actionText: 'ADD ACTIVITY',
        className: 'btn btn-success',
      },
    ],
  },
  Facility: {
    _id: '',
    facilityName: '',
    tableOptions: [
      {
        value: 'Facility Name',
        type: 'input',
        placeholder: 'Enter facility name...',
        className: 'form-control',
      },
      {
        value: 'City',
        type: 'input',
        placeholder: 'Enter facility city...',
        className: 'form-control',
      },
      {
        value: 'Address',
        type: 'input',
        placeholder: 'Enter facility address...',
        className: 'form-control',
      },
      {
        value: 'Activities',
        type: 'input',
        placeholder: 'Seperate activites with ,',
        className: 'form-control',
      },
      {
        value: 'Action',
        type: 'button',
        actionText: 'ADD FACILITY',
        className: 'btn btn-success',
      },
    ],
  },
  Reservation: {
    _id: '',
    tableOptions: [
      {
        value: 'Facility name',
        type: 'input',
        placeholder: 'Enter facility name...',
        className: 'form-control',
      },
      {
        value: 'Activity name',
        type: 'input',
        placeholder: 'Enter activity name...',
        className: 'form-control',
      },
      {
        value: 'TimeSlot',
        type: 'date',
        placeholder: 'Enter timeslot',
        className: 'form-control',
      },
      {
        value: 'Username',
        type: 'input',
        placeholder: 'Who is making the reservation...',
        className: 'form-control',
      },
      {
        value: 'Action',
        type: 'button',
        actionText: 'ADD RESERVATION',
        className: 'btn btn-success',
      },
    ],
  },
  User: {
    _id: '',
    tableOptions: [
      {
        value: 'Username',
        type: 'input',
        placeholder: 'Enter username...',
        className: 'form-control',
      },
      {
        value: 'Email',
        type: 'input',
        placeholder: 'Enter email...',
        className: 'form-control',
      },
      {
        value: 'Password',
        type: 'input',
        placeholder: 'Enter password...',
        className: 'form-control',
      },
      {
        value: 'Role',
        type: 'input',
        placeholder: 'Enter role for user...',
        className: 'form-control',
      },
      {
        value: 'Action',
        type: 'button',
        actionText: 'ADD USER',
        className: 'btn btn-success',
      },
    ],
  },
};
