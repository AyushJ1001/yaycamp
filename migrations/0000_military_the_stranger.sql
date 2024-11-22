CREATE TABLE IF NOT EXISTS "yaycamp_comment" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "yaycamp_comment_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"content" text NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"post_id" integer NOT NULL,
	"parent_id" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "yaycamp_post" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "yaycamp_post_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" varchar(256) NOT NULL,
	"title" varchar(256) NOT NULL,
	"description" text NOT NULL,
	"latitude" numeric(10, 7) NOT NULL,
	"longitude" numeric(10, 7) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"date" date NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "yaycamp_comment" ADD CONSTRAINT "yaycamp_comment_post_id_yaycamp_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."yaycamp_post"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "comment_user_id_idx" ON "yaycamp_comment" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "comment_post_id_idx" ON "yaycamp_comment" USING btree ("post_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "comment_parent_id_idx" ON "yaycamp_comment" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "post_title_idx" ON "yaycamp_post" USING btree ("title");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "post_user_id_idx" ON "yaycamp_post" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "coordinates_idx" ON "yaycamp_post" USING btree ("latitude","longitude");