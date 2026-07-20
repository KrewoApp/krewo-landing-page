const messages = [
  { sender: 'user', text: 'Hi, the AC stopped working in Building C, apartment 214.' },
  { sender: 'ai', text: 'Thanks. I created a new HVAC maintenance request for Building C, Unit 214.' },
  { sender: 'ai', text: 'The first available service windows are today at 11:30 AM or 2:00 PM. Would you like me to reserve one?' },
  { sender: 'user', text: '11:30 works.' },
  { sender: 'ai', text: 'The 11:30 AM appointment is ready for manager approval.' },
  { sender: 'ai', text: 'Approved. The resident and technician have both been notified.' }
];

const activities = [
  ['Request captured', 'Customer message received from Unit 214'],
  ['Request categorized', 'HVAC · AC not cooling · Medium priority'],
  ['Availability checked', 'Two open appointment windows found'],
  ['Approval requested', '11:30 AM appointment awaiting manager approval'],
  ['Job confirmed', 'Resident and technician notified']
];

let demoIndex = 0;
const chatWindow = document.querySelector('#chat-window');
const startButton = document.querySelector('#start-demo');
const nextButton = document.querySelector('#next-message');
const restartButton = document.querySelector('#restart-demo');
const newJob = document.querySelector('#new-job');
const jobTag = document.querySelector('#job-tag');
const requestCount = document.querySelector('#request-count');
const approvalCount = document.querySelector('#approval-count');
const activityFeed = document.querySelector('#activity-feed');
const dashboardStatus = document.querySelector('#dashboard-status');

function addMessage(message) {
  const bubble = document.createElement('div');
  bubble.className = `message ${message.sender}`;
  bubble.innerHTML = `${message.text}<small>9:${42 + demoIndex}</small>`;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function addActivity(index) {
  const activity = activities[index];
  if (!activity) return;
  const item = document.createElement('div');
  item.className = 'feed-item';
  item.innerHTML = `<span class="dot"></span><div><strong>${activity[0]}</strong><small>${activity[1]}</small></div>`;
  activityFeed.prepend(item);
}

function updateDashboard() {
  if (demoIndex === 1) {
    requestCount.textContent = '3';
    newJob.classList.remove('hidden');
    dashboardStatus.textContent = 'New request received';
    dashboardStatus.classList.remove('muted');
    addActivity(0);
  }
  if (demoIndex === 2) addActivity(1);
  if (demoIndex === 3) addActivity(2);
  if (demoIndex === 5) {
    approvalCount.textContent = '2';
    jobTag.textContent = 'Awaiting approval';
    addActivity(3);
  }
  if (demoIndex === 6) {
    approvalCount.textContent = '1';
    jobTag.textContent = 'Confirmed';
    jobTag.classList.remove('warning');
    dashboardStatus.textContent = 'Workflow complete';
    addActivity(4);
  }
}

function advanceDemo() {
  if (demoIndex >= messages.length) {
    nextButton.disabled = true;
    return;
  }
  addMessage(messages[demoIndex]);
  demoIndex += 1;
  updateDashboard();
  nextButton.disabled = demoIndex >= messages.length;
}

function resetDemo() {
  demoIndex = 0;
  chatWindow.innerHTML = '<div class="message ai">Start the demo to see how Krewo turns a customer message into an organized job.<small>9:41</small></div>';
  newJob.classList.add('hidden');
  jobTag.textContent = 'Pending';
  jobTag.classList.add('warning');
  requestCount.textContent = '2';
  approvalCount.textContent = '1';
  dashboardStatus.textContent = 'Waiting for request';
  dashboardStatus.classList.add('muted');
  activityFeed.innerHTML = '<div class="feed-item"><span class="dot"></span><div><strong>System ready</strong><small>Waiting for a new customer request</small></div></div>';
  startButton.disabled = false;
  nextButton.disabled = true;
}

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  nextButton.disabled = false;
  advanceDemo();
});
nextButton.addEventListener('click', advanceDemo);
restartButton.addEventListener('click', resetDemo);
resetDemo();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.querySelector('#year').textContent = new Date().getFullYear();

const leadForm = document.querySelector('#lead-form');
const formStatus = document.querySelector('#form-status');
leadForm.addEventListener('submit', async event => {
  const endpoint = leadForm.getAttribute('action');
  if (endpoint.includes('YOUR_FORM_ID')) {
    event.preventDefault();
    formStatus.textContent = 'Connect your free Formspree endpoint before submitting this form.';
    formStatus.className = 'form-status error';
    return;
  }

  event.preventDefault();
  const submitButton = leadForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: new FormData(leadForm),
      headers: { Accept: 'application/json' }
    });
    if (!response.ok) throw new Error('Submission failed');
    leadForm.reset();
    formStatus.textContent = 'Thanks. Your demo request has been sent.';
    formStatus.className = 'form-status success';
  } catch (error) {
    formStatus.textContent = 'The form could not be sent. Please try again or contact Krewo directly.';
    formStatus.className = 'form-status error';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Request my demo';
  }
});
