# Environment Variable Template

## General format:

```
EXPRESS_PORT=<your_express_port>
DATABASE_URL="postgres://<your_username>:<your_password>@<your_host>:5432/<your_database>"
```

## Example setup would be

```
EXPRESS_PORT=8000
DATABASE_URL="postgres://betsydb_user:FqhyJvPuEeXu0dM5uGJQyAaqCfxNptBJ@dpg-cn5vikun7f5s73ej1kbg-a.oregon-postgres.render.com/betsydb?ssl=true"
```

### Notes:
- Replace `<your_express_port>` with the port number you want your Express server to run on.
- Replace `<your_username>`, `<your_password>`, `<your_host>`, and `<your_database>` with your PostgreSQL connection details.
- Place the `.env` file in the `server/` directory.
