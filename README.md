# HanPoly

An experimental project for the lookup of multilingual 
pronunciations and Middle Chinese rime (phonology features, 韵)
of Chinese characters. 

Powered by Flask, React, SQLite (later MySQL).

# Current APIs

Homepage：

http://127.0.0.1:5000/

Simple query on [MCPDict](https://github.com/MaigoAkisame/MCPDict)
(with default query to the chinese character `文`):

http://127.0.0.1:5000/testee?han=六

# Cautions

For Flask app, the paths to files should be written starting from
the root dir, e.g. `'backend/data/mcpdict.db'`