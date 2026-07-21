const demoScenarios = {
  hvac: {
    label: 'HVAC',
    assistantStatus: 'HVAC workflow · Online',
    dashboardTitle: 'Service operations dashboard',
    metricLabels: ['Customer requests', 'Jobs today', 'Need approval'],
    metrics: { requests: 2, work: 8, approvals: 1 },
    openingMessage: 'Watch the demo to see how Krewo turns an HVAC request into an organized service job.',
    messages: [
      { sender: 'user', text: 'Hi, the AC stopped working in Building C, apartment 214.' },
      { sender: 'ai', text: 'Thanks. I created a new HVAC service request for Building C, Unit 214.' },
      { sender: 'ai', text: 'The first available service windows are today at 11:30 AM or 2:00 PM. Would you like me to reserve one?' },
      { sender: 'user', text: '11:30 works.' },
      { sender: 'ai', text: 'The 11:30 AM appointment is ready for manager approval.' },
      { sender: 'ai', text: 'Approved. The resident and technician have both been notified.' }
    ],
    activities: [
      ['Request captured', 'Customer message received from Unit 214'],
      ['Request categorized', 'HVAC · AC not cooling · Medium priority'],
      ['Availability checked', 'Two open service windows found'],
      ['Approval requested', '11:30 AM appointment awaiting manager approval'],
      ['Job confirmed', 'Resident and technician notified']
    ],
    schedule: [
      ['9:00 AM', 'HVAC tune-up', 'Riverstone Dental', 'Assigned'],
      ['11:30 AM', 'AC not cooling', 'Oakwood Apartments · Unit 214', 'Pending'],
      ['2:00 PM', 'System inspection', 'North Hills Cafe', 'Assigned']
    ]
  },
  florist: {
    label: 'Florist',
    assistantStatus: 'Florist workflow · Online',
    dashboardTitle: 'Order and delivery dashboard',
    metricLabels: ['New orders', 'Deliveries today', 'Need approval'],
    metrics: { requests: 4, work: 11, approvals: 1 },
    openingMessage: 'Watch the demo to see how Krewo turns a flower order into a scheduled delivery.',
    messages: [
      { sender: 'user', text: 'Can I get a birthday arrangement delivered to WakeMed today?' },
      { sender: 'ai', text: 'Yes. I created a birthday arrangement request for delivery to WakeMed.' },
      { sender: 'ai', text: 'We can deliver between 1:00–2:00 PM or 3:30–4:30 PM. Which window works best?' },
      { sender: 'user', text: 'The 1:00–2:00 window, please.' },
      { sender: 'ai', text: 'The arrangement and delivery fee are ready for shop approval.' },
      { sender: 'ai', text: 'Approved. Your order is confirmed and the delivery route has been updated.' }
    ],
    activities: [
      ['Order captured', 'Birthday arrangement requested for WakeMed'],
      ['Order categorized', 'Birthday · Designer choice · Same-day'],
      ['Delivery checked', 'Two route windows available'],
      ['Approval requested', 'Arrangement and delivery fee awaiting approval'],
      ['Delivery confirmed', 'Customer notified and route updated']
    ],
    schedule: [
      ['10:00 AM', 'Anniversary bouquet', 'The Dillon · Suite 510', 'Preparing'],
      ['1:00 PM', 'Birthday arrangement', 'WakeMed Raleigh Campus', 'Pending'],
      ['3:30 PM', 'Sympathy arrangement', 'Brown-Wynne Funeral Home', 'Assigned']
    ]
  },
  bakery: {
    label: 'Bakery',
    assistantStatus: 'Bakery workflow · Online',
    dashboardTitle: 'Order production dashboard',
    metricLabels: ['New orders', 'Orders today', 'Need approval'],
    metrics: { requests: 3, work: 14, approvals: 2 },
    openingMessage: 'Watch the demo to see how Krewo turns a custom cake request into an organized order.',
    messages: [
      { sender: 'user', text: 'I need a chocolate birthday cake for 20 people this Saturday.' },
      { sender: 'ai', text: 'I created a custom cake request for Saturday: chocolate cake, approximately 20 servings.' },
      { sender: 'ai', text: 'Pickup is available at 11:00 AM or 2:30 PM. Do you have a preferred time?' },
      { sender: 'user', text: '11:00 AM.' },
      { sender: 'ai', text: 'The order details and estimated price are ready for bakery approval.' },
      { sender: 'ai', text: 'Approved. The customer received the order confirmation and deposit link.' }
    ],
    activities: [
      ['Order captured', 'Custom birthday cake request received'],
      ['Order categorized', 'Chocolate · 20 servings · Saturday'],
      ['Production checked', 'Two pickup windows available'],
      ['Approval requested', 'Design details and estimate awaiting approval'],
      ['Order confirmed', 'Customer sent confirmation and deposit link']
    ],
    schedule: [
      ['8:30 AM', 'Corporate pastry box', 'Red Hat Tower', 'Baking'],
      ['11:00 AM', 'Chocolate birthday cake', 'Customer pickup', 'Pending'],
      ['2:30 PM', 'Wedding tasting box', 'Morgan Street Food Hall', 'Preparing']
    ]
  },
  restaurant: {
    label: 'Restaurant',
    assistantStatus: 'Restaurant workflow · Online',
    dashboardTitle: 'Order and delivery dashboard',
    metricLabels: ['New orders', 'Orders in progress', 'Need review'],
    metrics: { requests: 6, work: 18, approvals: 1 },
    openingMessage: 'Watch the demo to see how Krewo coordinates a restaurant catering delivery.',
    messages: [
      { sender: 'user', text: 'Can you deliver lunch for 15 people to our office tomorrow at noon?' },
      { sender: 'ai', text: 'I created a catering request for 15 guests, tomorrow at noon.' },
      { sender: 'ai', text: 'The kitchen can prepare the sandwich platter or taco bar package. Which would you prefer?' },
      { sender: 'user', text: 'The taco bar package.' },
      { sender: 'ai', text: 'The catering total and 11:45 AM delivery dispatch are ready for manager approval.' },
      { sender: 'ai', text: 'Approved. The customer, kitchen, and delivery driver have been notified.' }
    ],
    activities: [
      ['Order captured', 'Catering request received for 15 guests'],
      ['Order categorized', 'Corporate lunch · Tomorrow · Noon'],
      ['Capacity checked', 'Kitchen and delivery capacity confirmed'],
      ['Approval requested', 'Catering total and dispatch awaiting approval'],
      ['Order confirmed', 'Customer, kitchen, and driver notified']
    ],
    schedule: [
      ['10:45 AM', 'Office lunch delivery', 'Capitol Center', 'Preparing'],
      ['11:45 AM', 'Taco bar catering', 'Warehouse District office', 'Pending'],
      ['5:30 PM', 'Family meal delivery', 'Five Points', 'Assigned']
    ]
  },
  courier: {
    label: 'Courier delivery',
    assistantStatus: 'Courier workflow · Online',
    dashboardTitle: 'Dispatch operations dashboard',
    metricLabels: ['New requests', 'Stops today', 'Need approval'],
    metrics: { requests: 5, work: 22, approvals: 1 },
    openingMessage: 'Watch the demo to see how Krewo turns a delivery request into a dispatched route.',
    messages: [
      { sender: 'user', text: 'I need two legal documents picked up downtown and delivered to Cary by 3 PM.' },
      { sender: 'ai', text: 'I created a same-day courier request from downtown Raleigh to Cary, due by 3 PM.' },
      { sender: 'ai', text: 'Driver Maya can pick up at 1:15 PM. The estimated delivery time is 2:20 PM.' },
      { sender: 'user', text: 'That works.' },
      { sender: 'ai', text: 'The route and delivery price are ready for dispatcher approval.' },
      { sender: 'ai', text: 'Approved. The customer and driver received tracking and pickup instructions.' }
    ],
    activities: [
      ['Request captured', 'Same-day document delivery requested'],
      ['Route categorized', 'Downtown Raleigh → Cary · Due 3 PM'],
      ['Driver matched', 'Maya available for 1:15 PM pickup'],
      ['Approval requested', 'Route and delivery price awaiting approval'],
      ['Delivery dispatched', 'Customer and driver sent tracking details']
    ],
    schedule: [
      ['9:30 AM', 'Medical supply delivery', 'Rex Hospital', 'In transit'],
      ['1:15 PM', 'Legal document delivery', 'Downtown Raleigh → Cary', 'Pending'],
      ['3:45 PM', 'Auto parts route', 'Three repair shops', 'Assigned']
    ]
  }
};

let currentIndustry = 'hvac';
let demoIndex = 0;
let demoTimer = null;
let isPlaying = false;

const chatWindow = document.querySelector('#chat-window');
const startButton = document.querySelector('#start-demo');
const nextButton = document.querySelector('#next-message');
const restartButton = document.querySelector('#restart-demo');
const newJob = document.querySelector('#new-job');
const jobTag = document.querySelector('#job-tag');
const requestCount = document.querySelector('#request-count');
const workCount = document.querySelector('#work-count');
const approvalCount = document.querySelector('#approval-count');
const activityFeed = document.querySelector('#activity-feed');
const dashboardStatus = document.querySelector('#dashboard-status');
const industryButtons = document.querySelectorAll('.industry-demo-button');
const demoGrid = document.querySelector('.demo-grid');

const textTargets = {
  assistantStatus: document.querySelector('#assistant-status'),
  dashboardIndustry: document.querySelector('#dashboard-industry-label'),
  dashboardTitle: document.querySelector('#dashboard-title'),
  metricOne: document.querySelector('#metric-one-label'),
  metricTwo: document.querySelector('#metric-two-label'),
  metricThree: document.querySelector('#metric-three-label'),
  jobOneTime: document.querySelector('#job-one-time'),
  jobOneTitle: document.querySelector('#job-one-title'),
  jobOneCustomer: document.querySelector('#job-one-customer'),
  jobOneTag: document.querySelector('#job-one-tag'),
  newJobTime: document.querySelector('#new-job-time'),
  newJobTitle: document.querySelector('#new-job-title'),
  newJobCustomer: document.querySelector('#new-job-customer'),
  jobThreeTime: document.querySelector('#job-three-time'),
  jobThreeTitle: document.querySelector('#job-three-title'),
  jobThreeCustomer: document.querySelector('#job-three-customer'),
  jobThreeTag: document.querySelector('#job-three-tag')
};

function scenario() {
  return demoScenarios[currentIndustry];
}

function setText(element, value) {
  if (element) element.textContent = value;
}

function fillScheduleRow(prefix, row) {
  const [time, title, customer, tag] = row;
  setText(textTargets[`${prefix}Time`], time);
  setText(textTargets[`${prefix}Title`], title);
  setText(textTargets[`${prefix}Customer`], customer);
  setText(textTargets[`${prefix}Tag`], tag);
}

function applyScenario() {
  const data = scenario();
  setText(textTargets.assistantStatus, data.assistantStatus);
  setText(textTargets.dashboardIndustry, `${data.label} workflow`);
  setText(textTargets.dashboardTitle, data.dashboardTitle);
  setText(textTargets.metricOne, data.metricLabels[0]);
  setText(textTargets.metricTwo, data.metricLabels[1]);
  setText(textTargets.metricThree, data.metricLabels[2]);
  fillScheduleRow('jobOne', data.schedule[0]);
  fillScheduleRow('newJob', data.schedule[1]);
  fillScheduleRow('jobThree', data.schedule[2]);
  resetDemo();
}

function addMessage(message) {
  const bubble = document.createElement('div');
  bubble.className = `message ${message.sender}`;
  const time = 42 + demoIndex;
  bubble.innerHTML = `${message.text}<small>9:${String(time).padStart(2, '0')}</small>`;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function showTypingIndicator() {
  if (!chatWindow || chatWindow.querySelector('.typing-indicator')) return;
  const typing = document.createElement('div');
  typing.className = 'message ai typing-indicator';
  typing.setAttribute('aria-label', 'Krewo is typing');
  typing.innerHTML = '<i></i><i></i><i></i>';
  chatWindow.appendChild(typing);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function hideTypingIndicator() {
  chatWindow?.querySelector('.typing-indicator')?.remove();
}

function addActivity(index) {
  const activity = scenario().activities[index];
  if (!activity) return;
  const item = document.createElement('div');
  item.className = 'feed-item';
  item.innerHTML = `<span class="dot"></span><div><strong>${activity[0]}</strong><small>${activity[1]}</small></div>`;
  activityFeed.prepend(item);
}

function updateDashboard() {
  const data = scenario();
  if (demoIndex === 1) {
    requestCount.textContent = String(data.metrics.requests + 1);
    newJob.classList.remove('hidden');
    dashboardStatus.textContent = 'New request received';
    dashboardStatus.classList.remove('muted');
    addActivity(0);
  }
  if (demoIndex === 2) addActivity(1);
  if (demoIndex === 3) addActivity(2);
  if (demoIndex === 5) {
    approvalCount.textContent = String(data.metrics.approvals + 1);
    jobTag.textContent = 'Awaiting approval';
    addActivity(3);
  }
  if (demoIndex === 6) {
    approvalCount.textContent = String(data.metrics.approvals);
    jobTag.textContent = 'Confirmed';
    jobTag.classList.remove('warning');
    dashboardStatus.textContent = 'Workflow complete';
    addActivity(4);
  }
}

function advanceDemo() {
  const messages = scenario().messages;
  if (demoIndex >= messages.length) {
    isPlaying = false;
    startButton.disabled = false;
    startButton.textContent = '▶ Watch again';
    nextButton.disabled = true;
    return;
  }

  hideTypingIndicator();
  addMessage(messages[demoIndex]);
  demoIndex += 1;
  updateDashboard();
  nextButton.disabled = demoIndex >= messages.length;
}

function scheduleNextMessage() {
  const messages = scenario().messages;
  if (!isPlaying || demoIndex >= messages.length) {
    advanceDemo();
    return;
  }

  const nextMessage = messages[demoIndex];
  const typingDelay = nextMessage.sender === 'ai' ? 750 : 350;
  const pauseAfter = nextMessage.sender === 'ai' ? 1250 : 900;

  if (nextMessage.sender === 'ai') showTypingIndicator();

  demoTimer = window.setTimeout(() => {
    advanceDemo();
    if (demoIndex < messages.length) {
      demoTimer = window.setTimeout(scheduleNextMessage, pauseAfter);
    } else {
      isPlaying = false;
      startButton.disabled = false;
      startButton.textContent = '▶ Watch again';
    }
  }, typingDelay);
}

function resetDemo() {
  const data = scenario();
  window.clearTimeout(demoTimer);
  demoTimer = null;
  isPlaying = false;
  demoIndex = 0;
  chatWindow.innerHTML = `<div class="message ai">${data.openingMessage}<small>9:41</small></div>`;
  newJob.classList.add('hidden');
  jobTag.textContent = data.schedule[1][3];
  jobTag.classList.add('warning');
  requestCount.textContent = String(data.metrics.requests);
  workCount.textContent = String(data.metrics.work);
  approvalCount.textContent = String(data.metrics.approvals);
  dashboardStatus.textContent = 'Waiting for request';
  dashboardStatus.classList.add('muted');
  activityFeed.innerHTML = `<div class="feed-item"><span class="dot"></span><div><strong>System ready</strong><small>Waiting for a new ${data.label.toLowerCase()} request</small></div></div>`;
  startButton.disabled = false;
  startButton.textContent = '▶ Watch demo';
  nextButton.disabled = true;
}

industryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const industry = button.dataset.industry;
    if (!industry || industry === currentIndustry) return;

    demoGrid?.classList.add('is-switching');
    currentIndustry = industry;
    industryButtons.forEach(item => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    window.setTimeout(() => {
      applyScenario();
      demoGrid?.classList.remove('is-switching');
    }, 140);
  });
});

startButton?.addEventListener('click', () => {
  if (demoIndex >= scenario().messages.length) resetDemo();
  isPlaying = true;
  startButton.disabled = true;
  startButton.textContent = 'Playing…';
  scheduleNextMessage();
});
nextButton?.addEventListener('click', advanceDemo);
restartButton?.addEventListener('click', resetDemo);
applyScenario();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

function closeMenu() {
  nav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
document.addEventListener('click', event => {
  if (!nav?.classList.contains('open')) return;
  if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const leadForm = document.querySelector('#lead-form');
const formStatus = document.querySelector('#form-status');
leadForm?.addEventListener('submit', async event => {
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
    window.location.href = 'thank-you.html';
  } catch (error) {
    formStatus.textContent = 'The form could not be sent. Please try again or contact Krewo directly.';
    formStatus.className = 'form-status error';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Request my demo';
  }
});