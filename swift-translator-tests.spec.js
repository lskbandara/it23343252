const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement',
      input: 'mama malli ekka sellam karanna yanavaa.',
      expected: 'මම මල්ලි එක්ක සෙල්ලම් කරන්න යනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Simple food request',
      input: 'meke ganan kohomadha',
      expected: 'මෙකෙ ගනන් කොහොමද',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Going home statement',
      input: 'heta mama ennam',
      expected: 'හෙට මම එන්නම්',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Compound Sentences
    {
      tcId: 'Pos_Fun_004',
      name: 'Two activities connected',
      input: 'mama pol kadala ennam ethakan oyaa gedhara as karanna',
      expected: 'මම පොල් කඩල එන්නම් එතකන් ඔයා ගෙදර අස් කරන්න',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Weather condition compound',
      input: 'Heta udhee mama oyaata kathaa karannam meyaage vidhuli pettiya genna oona.',
      expected: 'හෙට උදේ මම ඔයාට කතා කරන්නම් මෙයාගෙ විදුලි පෙට්ටිය ගෙන්න ඕන.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    
    // Complex Sentences
    {
      tcId: 'Pos_Fun_006',
      name: 'Conditional complex sentence',
      input: 'mudhal thibboth, api heta eeka balanna yamu.',
      expected: 'මුදල් තිබ්බොත්, අපි හෙට ඒක බලන්න යමු.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    // Questions
    {
      tcId: 'Pos_Fun_007',
      name: 'Simple question about state',
      input: 'oyaa Udhee heta kohedha innee?',
      expected: 'ඔයා උදේ හෙට කොහෙද ඉන්නේ?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Question about time',
      input: 'api yanne hetadha?',
      expected: 'අපි යන්නෙ හෙටද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Polite question request',
      input: 'samanthata puluvandha?',
      expected: 'සමන්තට පුලුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
    // Commands
    {
      tcId: 'Pos_Fun_010',
      name: 'Direct command',
      input: 'Methana navaththanna!',
      expected: 'මෙතන නවත්තන්න!',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Polite command',
      input: 'saman meheta enna',
      expected: 'සමන් මෙහෙට එන්න',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    // Greetings and Responses
    {
      tcId: 'Pos_Fun_012',
      name: 'Morning greeting',
      input: 'aayuboovaan sundhara dhavasak',
      expected: 'ආයුබෝවාන් සුන්දර දවසක්',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Affirmative response',
      input: 'anivaarrayenma.',
      expected: 'අනිවාර්‍රයෙන්ම.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Tense Variations
    {
      tcId: 'Pos_Fun_014',
      name: 'Past tense action',
      input: 'Api eeka balanna giyaa',
      expected: 'අපි ඒක බලන්න ගියා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense plan',
      input: 'Mama heta ennam',
      expected:'මම හෙට එන්නම්',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
    // Negations
    {
      tcId: 'Pos_Fun_016',
      name: 'Simple negation',
      input: 'Eka hari naehae.',
      expected: 'එක හරි නැහැ.',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'mata saera kaeema kanna baehae.',
      expected: 'මට සැර කෑම කන්න බැහැ.',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    // Plural and Pronouns
    {
      tcId: 'Pos_Fun_018',
      name: 'Plural pronoun usage',
      input: 'Api rabutan kaevaa.',
      expected: 'අපි රබුටන් කැවා.',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    // Word Combinations
    {
      tcId: 'Pos_Fun_019',
      name: 'Common phrase pattern',
      input: 'Mama kathaa karanne naehae.',
      expected: 'මම කතා කරන්නේ නැහැ.',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Mixed Language
    {
      tcId: 'Pos_Fun_020',
      name: 'English brand term embedded',
      input: 'photo ekak gamu.',
      expected: 'photo එකක් ගමු.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Place name preservation',
      input: 'Dialog card ekak ganna.',
      expected: 'ඩයලොග් කාඩ් එකක් ගන්න.',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    // Punctuation
    {
      tcId: 'Pos_Fun_022',
      name: 'Exclamation mark handling',
      input: 'navaththanna!',
      expected: 'නවත්තන්න!',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Numbers and Formats
    {
      tcId: 'Pos_Fun_023',
      name: 'Currency amount',
      input: 'Mata rupiyal 500 ka maaru salli dhenna.',
      expected: 'මට රුපියල් 500 ක මාරු සල්ලි දෙන්න.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Medium Length
    {
      tcId: 'Pos_Fun_024',
      name: 'Medium length conversation',
      input: 'machan mama heta padam karanna gannavaa uba envadha  kiyala mata heta kiyanna mokadha heta api dhennatama ekatama patan ganna puluvaan nisaa  mata uben ahagannath dheval godhak thiyenva mchan mama aluthen business ekak patan ganna inneth oyata eka kiyannath amathaka  unaa , oyaa kamathinam api dhennatama ekathu vela karan yanna puluvan ekaa.mn eka karala loku vahanayak ganna inneth ',
      expected: 'මචන් මම හෙට පඩම් කරන්න ගන්නවා උබ එන්වද  කියල මට හෙට කියන්න මොකද හෙට අපි දෙන්නටම එකටම පටන් ගන්න පුලුවාන් නිසා  මට උබෙන් අහගන්නත් දෙවල් ගොදක් තියෙන්ව ම්චන් මම අලුතෙන් business එකක් පටන් ගන්න ඉන්නෙත් ඔයට එක කියන්නත් අමතක  උනා , ඔයා කමතිනම් අපි දෙන්නටම එකතු වෙල කරන් යන්න පුලුවන් එකා.ම්න් එක කරල ලොකු වහනයක් ගන්නෛ ඉන්නෙත් ',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'Meka hariyata karanna  theerenne naehae.',
      expected: 'මෙක හරියට කරන්න තේරෙන්නෙ නැහැ.',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'Mamameepoddakkadeetagiyaa.',
      expected: 'මම මේ පොඩ්ඩක් කඩේට ගියා.',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'kootiyak    kiyannee kiiyadha?',
      expected: 'කෝටියක් කියන්නේ කීයද?',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'මම ගෙදර යනවා බිල්ටත් කියන්න',
      expected: 'මම ගෙදර යනවා\nබිල්ටත් කියන්න',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'Meeka patta!',
      expected: 'මේක පට්ට!',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'Shape eke yamu.',
      expected: 'ෂේප් එකේ යමු.',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'Everything hari.',
      expected: 'එව්විරිතින් හරි',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'Mama "CTB" bas  ekee aavee.',
      expected: 'මම සී.ටී.බී. බස් එකේ ආවේ.',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'Sallidenawada?',
      expected: 'සල්ලි දෙනවාද?',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'Meka nam pissuwak.',
      expected: 'මේක නම් පිස්සුවක්',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kannavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
