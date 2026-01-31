<div align="center">

# 🌍 Singlish Translator  
### Playwright E2E Test Suite

**Automated End-to-End Testing for  
SwiftTranslator (Singlish → Sinhala)**

🚀 Built with **Playwright** | 🧪 Reliable | 🎯 UI-Focused

---

![Playwright](https://img.shields.io/badge/Tested%20With-Playwright-45ba4b?style=for-the-badge&logo=playwright)
![Node](https://img.shields.io/badge/Node.js-16+-339933?style=for-the-badge&logo=node.js)
![Status](https://img.shields.io/badge/Project-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/Use-Educational-blue?style=for-the-badge)

</div>

---

## 📌 Overview

This repository contains a **professional-grade automated testing suite** for the  
**SwiftTranslator Singlish → Sinhala web application**.

It validates:

- ✅ Translation accuracy  
- 🎨 UI behavior  
- 🧠 Edge cases & grammar scenarios  
- 📊 Test reports & artifacts  

Built for **academic evaluation and real-world QA practices**.

---

## ✨ Key Features

✅ End-to-End (E2E) testing with Playwright  
🌐 Singlish → Sinhala language coverage  
🧪 Positive & negative functional scenarios  
🎯 Real-time UI output validation  
📊 HTML & JSON test reports  
📸 Screenshots & videos on failures  

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd singlish-translator-playwright
```

### 2️⃣ Initialize Playwright

```bash
npm init playwright@latest
```

> 💡 **Recommended:** Choose **JavaScript**

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Install Browsers

```bash
npx playwright install chromium
```

---

## 🧪 Running Tests

### ▶ Run All Tests

```bash
npx playwright test
```

or

```bash
npm test
```

### 🛠 Helpful Commands

| Command | Description |
|------|------------|
| `--headed` | Run with visible browser |
| `--ui` | Interactive Playwright UI |
| `--debug` | Debug mode |
| `show-report` | Open HTML report |

```bash
npx playwright test --headed
npx playwright test --ui
npx playwright test --debug
npx playwright show-report
```

---

## 🗂️ Project Structure

```
├── swift-translator-tests.spec.js
├── playwright.config.js
├── package.json
├── tests/
│   └── example.spec.js
├── test-results/
│   ├── html-report/
│   ├── artifacts/
│   └── test-results.json
├── Test_Cases_Template.xlsx
├── README.md
├── .gitignore
```

---

## ✅ Test Coverage

### ✔ Positive Functional Tests
- Sentence structures  
- Questions & commands  
- Tenses & negations  
- Greetings  
- Mixed language input  
- Punctuation handling  
- Numbers & currency  

### ❌ Negative Functional Tests
- Missing / multiple spaces  
- Line breaks  
- Slang & abbreviations  
- Grammar errors  
- Typos  

### 🎨 UI Tests
- Real-time translation updates  

---

## 🗃️ Test Case Design

Each test case includes:

- **Test Case ID** (e.g., `Pos_Fun_001`)
- **Test Name**
- **Singlish Input**
- **Expected Sinhala Output**
- **Category**
- **Grammar Type**
- **Sentence Length**

---

## ⚙️ Configuration

Edit `playwright.config.js` to customize:

- ⏱ Default timeout – **60s**
- ⏳ Expect timeout – **10s**
- 🔁 Retries – **0**
- 👷 Workers – **1 (sequential)**
- 🌐 Base application URL  

---

## 🛠 Troubleshooting

### ❗ Tests Failing?
- Check internet connection  
- Verify UI changes  
- Increase timeouts if required  

### 🟢 Node Version

```bash
node --version
```

> Minimum: **Node.js 16+**

### ♻ Fix NPM Issues

```bash
npm cache clean --force
npm install
```

---

## 📊 Reports & Artifacts

📁 HTML Report → `test-results/html-report/`  
📄 JSON Results → `test-results/test-results.json`  
🎥 Screenshots & Videos → `test-results/artifacts/`  

---

## ℹ️ Notes

- Tests run **sequentially**
- 2-second delay for stability
- Screenshots/videos captured **on failure only**
- Base URL set in config file

---

## 📝 License

📚 **Educational Use Only**  
**IT3040 – IT Project Management (ITPM)**

---

## 👤 Author

🎓 **BSc (Hons) in Information Technology**  
👨‍🎓 **Year 3 Undergraduate**

---

<div align="center">

✨ *Designed for clean evaluation, clarity, and professionalism* ✨

</div>
