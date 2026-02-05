CREATE TABLE "todo-drizzle" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" varchar NOT NULL,
	"is_done" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
