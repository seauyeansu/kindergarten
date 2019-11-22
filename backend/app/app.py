from flask import Flask, render_template, request
from flask_mysqldb import MySQL

app = Flask (__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'ssh-agent'
app.config['MYSQL_DB'] = 'test'

mysql = MySQL(app)

@app.route('/', methods = ['GET', 'POST'])
@app.route('/index')
def index():
    if request.method == "POST":
        details = request.form
        motherName = details['motherName']
        fatherName = details['fatherName']
        firstNameofChild = details['firstNameofChild']
        group = details['groupName']
        email = details['email']
        password = details['password']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO Parents(motherName, fatherName, firstNameofChild, groupName, email, password) VALUES (%s, %s, %s, %s, %s, %s)", (motherName, fatherName, firstNameofChild, groupName, email, password))
        mysql.connection.commit()
        cur.close()
        return 'success'
    return render_template('index.html')


if __name__ == 'main':
    app.run()
