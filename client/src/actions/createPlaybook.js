import axios from 'axios';

const createPlaybook = async (name, content) => {
  const playbookData = {
    name,
    content,
    createdAt: Date.now(),
    createdBy: 'userID',
  };

  try {
    await axios.post('/playbooks/create', { playbookData })
  } catch(error) {
    throw new Error('Error during playbook creation !', { error, data: playbookData })
  }
}

export default createPlaybook;