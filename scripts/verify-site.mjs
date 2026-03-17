import { execSync, spawn } from 'child_process';
import http from 'http';

const BASE_URL = 'http://localhost:3000';
const BREAKPOINTS = {
  mobile: { width: 375, height: 667 },
  desktop: { width: 1280, height: 800 }
};

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkServer() {
  return new Promise((resolve) => {
    const req = http.get(BASE_URL, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => {
      resolve(false);
    });
    req.end();
  });
}

async function runBrowser(commands) {
  for (const cmd of commands) {
    try {
      execSync(`agent-browser ${cmd}`, { stdio: 'inherit' });
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  return { success: true };
}

async function main() {
  console.log('🚀 Starting Site Verification Suite...');

  const isRunning = await checkServer();
  let serverProcess;

  if (!isRunning) {
    console.log('📡 Starting development server...');
    serverProcess = spawn('npm', ['run', 'dev'], { stdio: 'ignore', detached: true });
    
    let attempts = 0;
    while (!(await checkServer()) && attempts < 30) {
      await wait(2000);
      attempts++;
      process.stdout.write('.');
    }
    console.log('\n💻 Server ready!');
  }

  const tests = [
    {
      name: 'Desktop Connectivity',
      cmds: [
        `set viewport ${BREAKPOINTS.desktop.width} ${BREAKPOINTS.desktop.height}`,
        `open ${BASE_URL}`,
        `wait 1000`,
        `open ${BASE_URL}/services`,
        `wait 1000`,
        `open ${BASE_URL}/case-study`,
        `wait 1000`
      ]
    },
    {
      name: 'Case Study Integrity',
      cmds: [
        `open ${BASE_URL}/case-study/shree-hari-charitra-mobile-application`,
        `wait 1000`,
        `eval "!document.body.innerText.includes('Application error')"`,
        `open ${BASE_URL}/case-study/aquapex-ro-ahmedabad-webdevelopment-case-study`,
        `wait 1000`,
        `eval "!document.body.innerText.includes('Application error')"`
      ]
    },
    {
      name: 'Mobile Layout \u0026 Menu',
      cmds: [
        `set viewport ${BREAKPOINTS.mobile.width} ${BREAKPOINTS.mobile.height}`,
        `open ${BASE_URL}`,
        `wait 1000`,
        `eval "document.documentElement.scrollWidth <= document.documentElement.clientWidth"`,
        `snapshot -i`,
        `click @e6`,
        `wait 500`,
        `eval "getComputedStyle(document.querySelector('ul[class*=\\"menu\\"]')).display === 'flex'"`
      ]
    }
  ];

  const results = [];
  for (const test of tests) {
    console.log(`\n🧪 Testing: ${test.name}...`);
    const res = await runBrowser(test.cmds);
    results.push({ name: test.name, success: res.success });
    if (res.success) console.log(`✅ Passed: ${test.name}`);
    else console.log(`❌ Failed: ${test.name}`);
  }

  if (serverProcess) {
    console.log('\n🛑 Stopping background server...');
    try {
      process.kill(-serverProcess.pid);
    } catch (e) {}
  }

  console.log('\n--- Final Report ---');
  results.forEach(r => console.log(`${r.success ? '✅' : '❌'} ${r.name}`));

  if (results.every(r => r.success)) {
    console.log('\n🎉 ALL TESTS PASSED!');
    process.exit(0);
  } else {
    console.log('\n🚨 SOME TESTS FAILED.');
    process.exit(1);
  }
}

main();
