# TELUS Support Chat Automation

This project contains automated tests for the TELUS Support Chat system using Playwright. The tests cover both MOB (Mobility) and FFH (Fixed and Home) scenarios.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Chrome browser

## Project Structure

```
├── config/
│   └── users.js           # User credentials configuration
├── fixtures/
│   └── test-scenarios.js  # Test scenarios for MOB and FFH
├── pages/
│   ├── BasePage.js        # Base page with common methods
│   ├── LoginPage.js       # Login page interactions
│   └── SupportPage.js     # Support page interactions
├── support/
│   └── constants.js       # Selectors and constants
└── tests/
    ├── mob-intents.spec.js # MOB test scenarios
    └── ffh-intents.spec.js # FFH test scenarios
```

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd [project-directory]
```

3. Install dependencies:
```bash
npm install
```

## Configuration

1. Update user credentials in `config/users.js`
2. Test scenarios can be modified in `fixtures/test-scenarios.js`

## Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run only MOB tests:
```bash
npx playwright test mob-intents.spec.js
```

### Run only FFH tests:
```bash
npx playwright test ffh-intents.spec.js
```

### View test report:
```bash
npx playwright show-report
```

## Test Flow

Each test follows this sequence:
1. Initial navigation to TELUS homepage
2. Accept cookies
3. Navigate to support section
4. Start chat
5. Perform login
6. Wait for chat initialization
7. Send main intent
8. Send follow-up messages
9. Verify chat remains active

## Logging

The tests include detailed logging for each step:
- ✓ Success messages
- ℹ Information messages
- ✗ Error messages

## Browser Support

Tests are configured to run only in Chrome (Chromium) for consistency and performance.

## Test Reports

After test execution, a detailed HTML report is generated with:
- Test results summary
- Test duration
- Screenshots of failures
- Step-by-step logs
- Error details (if any)

## Troubleshooting

1. If the report doesn't open on the default port:
```bash
npx playwright show-report --port [different-port-number]
```

2. If tests fail due to timeouts, check:
   - Internet connection
   - TELUS website availability
   - Login credentials

## Contributing

1. Follow the existing code structure
2. Maintain English comments
3. Add appropriate logging
4. Update README for significant changes

## Support

For issues or questions:
1. Check existing documentation
2. Review test logs
3. Contact the development team 