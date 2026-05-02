# TaskFlow - Team Task Manager 🚀

A modern team task management app with dark theme, real-time updates, and complete project tracking.

## ✨ Features

**Authentication**
- Login/Register with password strength indicator
- User profiles (Name, Email, Department, Role, Phone, Bio)
- Role-based access (Admin/Member)

**Dashboard**
- Task statistics (Total, Completed, Pending, Overdue)
- Completion rate with progress bar
- Recent activity feed
- Today's tasks counter

**Projects**
- Create/Delete projects
- View task counts per project

**Tasks**
- Create/Delete/Update tasks
- Priority levels (Low/Medium/High)
- Status tracking (Pending/In Progress/Completed)
- Filter by status | Live search
- Overdue highlighting

**Team & Profile**
- View all team members
- Personal statistics page

## 🛠️ Tech Stack

- HTML5, CSS3, JavaScript 
- Font Awesome Icons
- Flask Backend


## 🚀 Quick Start

```bash
# Clone & setup
git clone <your-repo>
cd taskflow
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install flask flask-sqlalchemy flask-login bcrypt

# Run
python app.py
Visit http://localhost:5000

🔑 Default Login
Username	      Password	      Role
admin	          admin123	      Admin


📡 API Endpoints Needed
Method	  Endpoint	  Body
POST	    /api/login	{username, password}
POST	    /api/register	{username, email, password, fullname, department, role, phone, bio}
GET	      /api/user	-
GET	      /api/dashboard/stats	-
GET	      /api/projects	-
POST	    /api/projects	{name, description}
DELETE	  /api/projects/<id>	-
GET	      /api/tasks	-
POST	    /api/tasks	{title, description, project_id, assigned_to, priority, due_date}
PUT	      /api/tasks/<id>	{status}
DELETE	  /api/tasks/<id>	-
GET	      /api/users	-
POST	    /api/logout	-

🎨 Color Scheme
Primary: #58A6FF (Blue)

Secondary: #A855F7 (Purple)

Background: #0B0F1C (Dark)

Cards: #111827 (Darker)

📱 Responsive
Works on mobile, tablet, and desktop devices.

📄 License
MIT