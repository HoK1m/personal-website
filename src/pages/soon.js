import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Soon = () => (
  <Layout seo="Coming Soon™ | Howard Kim">
    <div className="content">
      <motion.h1
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.3, -0.05, 0.01, 0.9] }}
      >
        Coming SOON™
      </motion.h1>
      <motion.p
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.3, -0.05, 0.01, 0.9] }}
      >
        I can be a fat ass sometimes.
      </motion.p>
      <motion.p
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1, ease: [0.3, -0.05, 0.01, 0.9] }}
      >
        Lazy most of the time.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1, ease: [0.3, -0.05, 0.01, 0.9] }}
      >
        <Link className="button" to="/">
          Go Home
        </Link>
      </motion.div>
    </div>
  </Layout>
)

export default Soon