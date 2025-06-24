import { useState, useEffect } from 'react';
import styles from './Work.module.css';

const ProjectPage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div className={styles.workContainer}>
      <div
        className={`${styles.wrapper} ${
          shouldAnimate ? `${styles.animate}` : ''
        } ${styles.lightWrapper} `}
      ></div>
      {shouldAnimate ? (
        <div className={styles.workContent}>
          <div className={styles.navBar}>
            <a className={styles.homeLink} href='/'>
              HOME
            </a>
            <div className={styles.workLine}></div>
            <div className={styles.workCopywrightContainer}>
              <span className={styles.workCopywright}>©</span> 2025
            </div>
          </div>
          <div className={styles.workText}>
            <a
              className={styles.projectHeader}
              href='https://collab-note-chi.vercel.app/'
            >
              COLLABNOTE
            </a>
            <p className={styles.workParagraph}>
              CollabNote is a full-stack, real-time collaborative text editor
              built to showcase modern frontend engineering principles,
              architectural decision-making, and real-time system design. I led
              the development end-to-end, designing and implementing the UI with
              Next.js and Zustand, integrating NextAuth.js with Supabase for
              authentication, and setting up real-time sync using WebSockets and
              Supabase’s Postgres change listeners. I built robust API routes
              with Next.js server functions, managed relational data using
              Prisma with a PostgreSQL backend, and deployed the entire system
              on Vercel. This project reflects my ability to architect scalable
              frontends, implement real-time collaboration, and work across the
              full stack while maintaining clean, maintainable code.
            </p>
            <h1 className={styles.projectHeader}>TECHNOLOGIES USED:</h1>
            <p className={styles.workParagraph}>
              {' '}
              Frontend: Next.js (App Router) · TypeScript · Zustand (state
              management) · Tailwind CSS · Lucide React (UI icons)
            </p>
            <p className={styles.workParagraph}>
              {' '}
              Authentication: Supabase Auth · NextAuth.js (custom adapter)
            </p>
            <p className={styles.workParagraph}>
              {' '}
              Real-Time Collaboration: Supabase Realtime (Postgres changes) ·
              WebSockets (custom sync implementation)
            </p>
            <p className={styles.workParagraph}>
              Backend: Next.js API Routes · PostgreSQL (hosted on Supabase) ·
              Prisma ORM
            </p>
            <p className={styles.workParagraph}>
              Infrastructure & Tooling: Vercel (hosting + CI/CD) · ESLint &
              Prettier (code quality) · Postman (API testing) · Zod (input
              validation)
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.initialContent}></div>
      )}
    </div>
  );
};

export default ProjectPage;
