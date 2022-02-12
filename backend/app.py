from flask import Flask, render_template, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# DATABASE = './mcpdict.db'


@app.route('/')
def hello_world():
    return '問天地好在。' + '''
    <form action="/testee">
    <input type="submit" value="Go to Testee" />
    </form>
    '''


# def get_db():
#     db = getattr(g, '_database', None)
#     if db is None:
#         db = g._database = sqlite3.connect(DATABASE)
#     return db


# use xxx/testee?han=文
@app.route('/testee')
def testee():
    # cursor = get_db().cursor()
    han = request.args.get('han')
    if han is None:
        han = '文'
    hans = search_in_db(han)
    return render_template('testee.html') + hans


@app.route('/han_search', methods=['POST'])
def han_search():
    print(request.get_json())
    han = request.get_json().copy().get('query', '文')
    hans = search_in_db(han)
    output = {'hans': hans}
    return output


def search_in_db(han):
    unicode_str = han.encode('unicode_escape')
    unicode_str = str(unicode_str)  # like (incl. "b'\\" etc.): b'\\u4e00'
    unicode_str = unicode_str[5:-1].upper()
    conn = sqlite3.connect('backend/data/mcpdict.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM mcpdict WHERE unicode = ?', (unicode_str,))
    hans = cursor.fetchall()[0]
    return hans


if __name__ == '__main__':
    app.run()
