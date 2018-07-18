export const DATABASE_COLLECTIONS = {
  Activity: {
    _id: '',
    activityName: '',
    tableOptions: [
      {
        value: 'Activity name',
        code: 'activityName',
        type: 'input',
        placeholder: 'Enter activity name...',
        className: 'form-control',
      },
      {
        value: 'Action',
        code: 'action',
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
        code: 'facilityName',
        type: 'input',
        placeholder: 'Enter facility name...',
        className: 'form-control',
      },
      {
        value: 'City',
        code: 'city',
        type: 'input',
        placeholder: 'Enter facility city...',
        className: 'form-control',
      },
      {
        value: 'Address',
        code: 'address',
        type: 'input',
        placeholder: 'Enter facility address...',
        className: 'form-control',
      },
      {
        value: 'Activities',
        code: 'activities',
        type: 'input',
        placeholder: 'Seperate activites with ,',
        className: 'form-control',
      },
      {
        value: 'Action',
        code: 'action',
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
        code: 'facilityName',
        type: 'input',
        placeholder: 'Enter facility name...',
        className: 'form-control',
      },
      {
        value: 'Activity name',
        code: 'activityName',
        type: 'input',
        placeholder: 'Enter activity name...',
        className: 'form-control',
      },
      {
        value: 'TimeSlot',
        code: 'timeSlot',
        type: 'date',
        placeholder: 'Enter timeslot',
        className: 'form-control',
      },
      {
        value: 'Username',
        code: 'userName',
        type: 'input',
        placeholder: 'Who is making the reservation...',
        className: 'form-control',
      },
      {
        value: 'Action',
        code: 'action',
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
        code: 'userName',
        type: 'input',
        placeholder: 'Enter username...',
        className: 'form-control',
      },
      {
        value: 'Email',
        code: 'email',
        type: 'input',
        placeholder: 'Enter email...',
        className: 'form-control',
      },
      {
        value: 'Password',
        code: 'password',
        type: 'input',
        placeholder: 'Enter password...',
        className: 'form-control',
      },
      {
        value: 'Role',
        code: 'role',
        type: 'input',
        placeholder: 'Enter role for user...',
        className: 'form-control',
      },
      {
        value: 'Action',
        code: 'action',
        type: 'button',
        actionText: 'ADD USER',
        className: 'btn btn-success',
      },
    ],
  },
};


export const DATABASE_ACTIONS = [
    'ADD',
    'EDIT',
    'DELETE',
    'LIST'
]