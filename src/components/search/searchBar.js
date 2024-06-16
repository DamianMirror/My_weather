export const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent background
    backdropFilter: 'blur(10px)', // blur effect
    border: '1px solid rgba(255, 255, 255, 0.3)', // transparent border
    borderRadius: '20px',
    boxShadow: 'none',
    color: '#fff', // white text color
    height: '50px', // increased height
    minHeight: '50px', // ensure minimum height
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'rgba(204, 229, 240, 0.5)' : 'rgba(255, 255, 255, 0.2)', // semi-transparent background
    color: '#fff', // white text color
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: state.isSelected ? 'rgba(204, 229, 240, 0.5)' : 'rgba(255, 255, 255, 0.3)', // lighter on hover
    },
    '&:first-of-type': {
      marginTop: '-4px', // Adjust as necessary to remove top strip
    },
    '&:last-of-type': {
      marginBottom: '-4px', // Adjust as necessary to remove bottom strip
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent background
    border: '1px solid rgba(255, 255, 255, 0.3)', // transparent border
    borderRadius: '20px',
    overflow: 'hidden', // Ensure options do not extend beyond the menu
    marginTop: '10px', // Space between control and menu
    marginBottom: '0', // Remove extra space at the bottom
    backdropFilter: 'blur(10px)', // blur effect
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: '0', // Remove extra space at the top
    paddingBottom: '0', // Remove extra space at the bottom
    maxHeight: '200px',
    overflowY: 'hidden', // Hide vertical scrollbar
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff', // white text color
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'rgba(255, 255, 255, 0.7)', // semi-transparent white text for placeholder
  }),
  input: (provided) => ({
    ...provided,
    color: '#fff', // white text color for input
  }),
};
