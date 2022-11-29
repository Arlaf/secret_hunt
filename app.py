from flask import Flask, render_template
import os

app = Flask(__name__)
app.config['img_folder'] = os.path.join('static', 'images')

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/matrix', methods=['POST'])
def table():
    return render_template('matrix.html')


@app.route('/location', methods=['POST'])
def clue():
    imgs = [
        os.path.join(app.config['img_folder'], 'map.jpg'),
        os.path.join(app.config['img_folder'], 'photo01.jpg')
    ]
    return render_template('clue.html', imgs=imgs)


if __name__ == '__main__':
    app.run(debug=True)
