-- factorytoshelf-db (D1) schema
-- extracted from live database 2026-09-06
CREATE TABLE registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  role TEXT NOT NULL CHECK (role IN ('supplier','buyer')),
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  name TEXT DEFAULT '',
  company TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  country TEXT DEFAULT '',
  categories TEXT DEFAULT '',
  model TEXT DEFAULT '',
  channels TEXT DEFAULT '',
  size TEXT DEFAULT '',
  extra TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX idx_reg_role ON registrations(role);
CREATE TABLE sample_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  product TEXT DEFAULT '',
  supplier TEXT DEFAULT '',
  note TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE chat_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT DEFAULT '',
  role TEXT DEFAULT '',
  content TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now'))
);
