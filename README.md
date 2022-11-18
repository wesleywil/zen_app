# Meditation App - Zen

A meditation app for calming the soul in this busy world.

## Used Tech

**Frontend:** Typescript, Reactjs, React-Redux, Redux-Toolkit, Tailwind, DaisyUI

**Backend:** Python, Django, Django-Rest-Framework, SQLITE(for now) - I still thinking if I'm going to use this as backend.

## Created By

- [wesley wilson](https://github.com/wesleywil)

## How To Run

All commands are run from the root of the project, from a terminal:

### Backend

| Command                            | Action                              |
| :--------------------------------- | :---------------------------------- |
| `python3 -m venv env`              | Create a virtual enviropment        |
| `source env/bin/activate`          | activate virtual enviropment(LINUX) |
| `pip install -r requirements.txt`  | install dependencies                |
| `python manage.py makemigrations`  | makemigrations                      |
| `python manage.py migrate`         | migrate                             |
| `python manage.py createsuperuser` | create super user to admin options  |
| `python manage.py runserver`       | run server                          |

### Frontend

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:5000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
