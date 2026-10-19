const WEEK7 = {
  "id": "w7",
  "title": "String",
  "sub": "Indexing, slicing, formatting, string methods, transformation, split, and join",
  "concepts": [
    {
      "title": "Indexing",
      "text": "Strings are sequences. Positive indexes start at 0 from the left, and negative indexes start at -1 from the right."
    },
    {
      "title": "Slicing and immutability",
      "text": "text[start:stop:stride] creates a new string. The stop index is excluded, and the original string is not changed."
    },
    {
      "title": "String formatting",
      "text": "Field width controls minimum display width. Use < for left, > for right, ^ for center, and an optional fill character before the alignment symbol."
    },
    {
      "title": "String methods",
      "text": "replace(), find(), rfind(), and count() help search and modify text. String checks and transformations include isdigit(), isupper(), lower(), strip(), and related methods."
    },
    {
      "title": "Split and join",
      "text": "split() breaks a string into a list of tokens. join() creates a new string by placing a separator between strings."
    }
  ],
  "examples": [
    {
      "title": "Example 1: Indexing and slicing",
      "code": "text = 'Hello World'\nprint(text[1])\nprint(text[1:5])",
      "text": "Index 1 is e. The slice from 1 to 5 stops before index 5, so it prints ello."
    },
    {
      "title": "Example 2: Stride and immutability",
      "code": "text = 'abcdefghij'\npiece = text[0:10:2]\ntext = 'xyz'\nprint(piece)",
      "text": "The slice selects indices 0, 2, 4, 6, and 8, producing acegi. Reassigning text later does not change piece."
    },
    {
      "title": "Example 3: Width, alignment, and fill",
      "code": "symbol = '@'\nprint(f'{symbol:*^11}')",
      "text": "The @ is centered in width 11 and the unused positions are filled with *, producing *****@*****."
    },
    {
      "title": "Example 4: Find, replace, and count",
      "code": "s = 'Python is fun, Python is powerful.'\nnew_s = s.replace('Python', 'Java', 1)\nprint(new_s.find('Python'))\nprint(new_s.count('Python'))",
      "text": "Only the first Python is replaced. The remaining Python can still be found and counted."
    },
    {
      "title": "Example 5: Split and join",
      "code": "email = 'caius.palomo@mail.mcgill.ca'\nname = email.split('@')[0]\nparts = name.split('.')\nprint(' '.join(parts))",
      "text": "The email is split to isolate caius.palomo, then split again at the period and joined with a space to produce caius palomo."
    }
  ],
  "questions": [
    {
      "type": "programming",
      "topic": "positive indexing",
      "prompt": "What does this code print?\ntext = 'Hello'\nprint(text[2])",
      "options": [
        "H",
        "e",
        "l",
        "o"
      ],
      "correct": 2,
      "explain": "Index 2 is l."
    },
    {
      "type": "programming",
      "topic": "negative indexing",
      "prompt": "What does this code print?\ntext = 'Hello'\nprint(text[-2])",
      "options": [
        "H",
        "e",
        "l",
        "o"
      ],
      "correct": 2,
      "explain": "-2 is l."
    },
    {
      "type": "programming",
      "topic": "slicing",
      "prompt": "What does this code print?\ntext = 'Python'\nprint(text[1:5])",
      "options": [
        "Pyth",
        "ytho",
        "ython",
        "yth"
      ],
      "correct": 1,
      "explain": "The output is ytho."
    },
    {
      "type": "programming",
      "topic": "omitted start",
      "prompt": "What does this code print?\ntext = 'en.wikipedia'\nprint(text[:5])",
      "options": [
        "en.w",
        "en.wi",
        "n.wik",
        "en.wik"
      ],
      "correct": 1,
      "explain": "The output is en.wi."
    },
    {
      "type": "programming",
      "topic": "omitted stop",
      "prompt": "What does this code print?\ntext = 'en.wikipedia'\nprint(text[2:])",
      "options": [
        "en",
        "wikipedia",
        ".wikipedia",
        "n.wikipedia"
      ],
      "correct": 2,
      "explain": "The output is .wikipedia."
    },
    {
      "type": "programming",
      "topic": "stride",
      "prompt": "What does this code print?\ntext = 'abcdefghij'\nprint(text[0:10:2])",
      "options": [
        "abcdefghij",
        "acegi",
        "bdfhj",
        "abcde"
      ],
      "correct": 1,
      "explain": "The output is acegi."
    },
    {
      "type": "programming",
      "topic": "combined slices",
      "prompt": "What does this code print?\na = 'Google'\nb = 'Wikipedia'\nprint(a[3:-1] + b[1:-3:2])",
      "options": [
        "gliie",
        "gliki",
        "gleia",
        "gwiie"
      ],
      "correct": 0,
      "explain": "The output is gliie."
    },
    {
      "type": "programming",
      "topic": "immutability",
      "prompt": "What does this code print?\noriginal = 'Hello World'\npiece = original[1:-3]\noriginal = 'Hi World'\nprint(piece)",
      "options": [
        "i Wo",
        "ello Wo",
        "Hi World",
        "Hello World"
      ],
      "correct": 1,
      "explain": "The earlier slice remains ello Wo."
    },
    {
      "type": "programming",
      "topic": "alignment",
      "prompt": "Which format specification centers text in a field of width 10?",
      "options": [
        "<10",
        ">10",
        "^10",
        "10^"
      ],
      "correct": 2,
      "explain": "^ means center alignment."
    },
    {
      "type": "programming",
      "topic": "fill",
      "prompt": "What does this code print?\nsymbol = '@'\nprint(f'{symbol:*^5}')",
      "options": [
        "**@**",
        "@****",
        "****@",
        "*@***"
      ],
      "correct": 0,
      "explain": "The output is **@**."
    },
    {
      "type": "programming",
      "topic": "replace",
      "prompt": "What does this code print?\ntext = 'red red blue'\nprint(text.replace('red','green',1))",
      "options": [
        "green green blue",
        "green red blue",
        "red green blue",
        "red red green"
      ],
      "correct": 1,
      "explain": "Only the first match is replaced."
    },
    {
      "type": "programming",
      "topic": "find",
      "prompt": "What does this code print?\ntext = 'banana'\nprint(text.find('na'))",
      "options": [
        "1",
        "2",
        "3",
        "-1"
      ],
      "correct": 1,
      "explain": "The first na begins at index 2."
    },
    {
      "type": "programming",
      "topic": "count",
      "prompt": "What does this code print?\ntext = 'banana'\nprint(text.count('a'))",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 1,
      "explain": "a occurs three times."
    },
    {
      "type": "programming",
      "topic": "transformation",
      "prompt": "What does this code print?\nname = '  BOB  '\nprint(name.strip().lower())",
      "options": [
        "  bob  ",
        "BOB",
        "bob",
        "Bob"
      ],
      "correct": 2,
      "explain": "The output is bob."
    },
    {
      "type": "programming",
      "topic": "split and join",
      "prompt": "What does this code print?\ntext = 'caius.palomo'\nparts = text.split('.')\nprint(' '.join(parts))",
      "options": [
        "caius.palomo",
        "caius palomo",
        "['caius', 'palomo']",
        "caius-palomo"
      ],
      "correct": 1,
      "explain": "The output is caius palomo."
    },
    {
      "type": "logic",
      "topic": "slice boundaries",
      "prompt": "For text[start:stop], which positions are included?",
      "options": [
        "start through stop, both included",
        "start through stop - 1",
        "start + 1 through stop",
        "Only start and stop"
      ],
      "correct": 1,
      "explain": "The stop position is excluded."
    },
    {
      "type": "logic",
      "topic": "immutability",
      "prompt": "Which statement about strings is correct?",
      "options": [
        "A string can be changed one character at a time",
        "Slicing changes the original string",
        "Strings are immutable, so slicing creates a new string",
        "Reassignment changes every earlier slice"
      ],
      "correct": 2,
      "explain": "Strings are immutable."
    },
    {
      "type": "logic",
      "topic": "find",
      "prompt": "What does find() return when the substring is absent?",
      "options": [
        "None",
        "0",
        "-1",
        "False"
      ],
      "correct": 2,
      "explain": "find() returns -1."
    },
    {
      "type": "logic",
      "topic": "split",
      "prompt": "How do split(' ') and split() differ with repeated spaces?",
      "options": [
        "They are always identical",
        "split(' ') can preserve empty tokens, while split() ignores extra whitespace",
        "split() returns a string",
        "split(' ') removes all spaces first"
      ],
      "correct": 1,
      "explain": "The explicit separator can produce empty tokens."
    },
    {
      "type": "logic",
      "topic": "join",
      "prompt": "What does join() do?",
      "options": [
        "Breaks a string into characters",
        "Finds the first match",
        "Creates a new string with a separator between input strings",
        "Changes the original string in place"
      ],
      "correct": 2,
      "explain": "join() combines strings with a separator."
    }
  ]
};
MODULES.push(WEEK7);
renderModuleList();
renderStudyTabs();
