import React from "react";
import { 
  Box, 
  Grid, 
  Typography, 
  Paper, 
  Chip, 
  Button, 
  Stack, 
  Avatar, 
  Card, 
  CardContent, 
  CardActions,
  Divider,
  useTheme,
  IconButton,
  Tooltip
} from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import CakeIcon from '@mui/icons-material/Cake';
import TerminalIcon from '@mui/icons-material/Terminal';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';
import StorageIcon from '@mui/icons-material/Storage';
import PaletteIcon from '@mui/icons-material/Palette';
import ApiIcon from '@mui/icons-material/Api';
import ArticleIcon from '@mui/icons-material/Article';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

interface HomeProps {
  theme: 'light' | 'dark';
  activeTab?: number;
  onTabChange?: (tabIndex: number) => void;
}

export const Home: React.FC<HomeProps> = ({ theme: mode, activeTab = 0, onTabChange }) => {
  const muiTheme = useTheme();
  const isDark = mode === 'dark';
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("taninjackie@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mainSkills = [
    { 
      category: "Frontend Framework", 
      name: "Next.js 15 (App Router)", 
      desc: "Next.js 15 (App Router) + React 19 + TypeScript", 
      icon: <CodeIcon color="primary" />,
      badge: "Frontend"
    },
    { 
      category: "Styling & UI", 
      name: "Tailwind CSS & Motion", 
      desc: "Tailwind CSS + Lucide Icons + Framer Motion", 
      icon: <PaletteIcon color="primary" />,
      badge: "UI / UX"
    },
    { 
      category: "API & Data Fetching", 
      name: "tRPC v10 & React Query", 
      desc: "tRPC v10 + React Query", 
      icon: <ApiIcon color="primary" />,
      badge: "API"
    },
    { 
      category: "Database & ORM", 
      name: "Supabase & Prisma ORM", 
      desc: "Supabase (PostgreSQL) + Prisma ORM (@finomni/db)", 
      icon: <StorageIcon color="primary" />,
      badge: "Database"
    },
    { 
      category: "Authentication", 
      name: "Supabase Auth", 
      desc: "Supabase Auth (Google & Facebook OAuth)", 
      icon: <TerminalIcon color="primary" />,
      badge: "Auth"
    },
    { 
      category: "Validation", 
      name: "Zod Schema Validation", 
      desc: "Zod (@finomni/validators)", 
      icon: <CodeIcon color="primary" />,
      badge: "Validation"
    },
  ];

  const projects = [
    {
      title: "Neo-KrobFin-2.0",
      desc: "A web application for technical analysis, financial charting, and trading strategy visualization built with Next.js 15, React 19, Tailwind CSS & TypeScript.",
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Lucide Icons", "Framer Motion", "Technical Analysis", "Financial Tools"],
      github: "https://github.com/taninjackie/Neo-KrobFin-2.0",
      demo: "https://neokrobfin-web.vercel.app",
    },
  ];

  const posts = [
    {
      title: "Building Scalable Frontends with React & TypeScript",
      date: "Sep 2026",
      summary: "Key architectural patterns and type safety benefits when developing modern web applications.",
      readTime: "5 min read",
    },
    {
      title: "Applying Technical Analysis Concepts to Frontend Analytics",
      date: "Aug 2026",
      summary: "Exploring how quantitative market strategies translate to user behavior visualization.",
      readTime: "7 min read",
    },
  ];

  return (
    <Box sx={{ maxWidth: 960, mx: "auto", px: { xs: 1, sm: 2 }, pb: 6 }}>
      {/* Top Banner / Hero Profile Card */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          mb: 4,
          borderRadius: "20px",
          background: isDark
            ? "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)",
          backdropFilter: "blur(12px)",
          border: isDark 
            ? "1px solid rgba(255, 255, 255, 0.1)" 
            : "1px solid rgba(226, 232, 240, 0.9)",
          boxShadow: isDark
            ? "0 20px 40px -15px rgba(0,0,0,0.5)"
            : "0 20px 40px -15px rgba(0,0,0,0.06)",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm="auto">
            <Avatar
              sx={{
                width: { xs: 80, sm: 96 },
                height: { xs: 80, sm: 96 },
                background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                fontSize: "2rem",
                fontWeight: 800,
                color: "#FFFFFF",
                boxShadow: isDark 
                  ? "0 0 25px rgba(99, 102, 241, 0.4)" 
                  : "0 10px 25px rgba(79, 70, 229, 0.3)",
              }}
            >
              TL
            </Avatar>
          </Grid>
          <Grid item xs={12} sm>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1, mb: 0.5 }}>
              <Typography variant="h4" fontWeight={800} letterSpacing="-0.02em">
                Tanin Limsiriwong
              </Typography>
              <Chip
                label="Frontend Developer"
                size="small"
                sx={{
                  backgroundColor: isDark ? "rgba(99, 102, 241, 0.2)" : "rgba(79, 70, 229, 0.1)",
                  color: isDark ? "#818CF8" : "#4F46E5",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  border: isDark ? "1px solid rgba(99, 102, 241, 0.3)" : "1px solid rgba(79, 70, 229, 0.2)",
                }}
              />
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 600 }}>
              Passionate Computer Engineer specializing in React, TypeScript, and modern UI engineering. Dedicated to crafting sleek, responsive user experiences.
            </Typography>

            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              <Button
                variant="contained"
                size="medium"
                disableElevation
                onClick={() => onTabChange && onTabChange(1)}
                startIcon={<CodeIcon />}
                sx={{
                  background: isDark
                    ? "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
                    : "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  fontWeight: 700,
                  px: 2.5,
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="medium"
                onClick={() => onTabChange && onTabChange(3)}
                startIcon={<EmailIcon />}
                sx={{
                  borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
                  color: muiTheme.palette.text.primary,
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: muiTheme.palette.primary.main,
                    backgroundColor: isDark ? "rgba(99,102,241,0.1)" : "rgba(79,70,229,0.05)",
                  },
                }}
              >
                Contact Me
              </Button>
              <IconButton
                component="a"
                href="https://github.com/taninjackie/My-Portfolio"
                target="_blank"
                rel="noreferrer"
                sx={{
                  border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.15)",
                  color: muiTheme.palette.text.primary,
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Dynamic Content Based on Selected Tab */}
      {activeTab === 0 && (
        <Stack spacing={4}>
          {/* Bio Timeline Section */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: "20px",
            }}
          >
            <Typography variant="h5" fontWeight={700} sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
              <SchoolIcon color="primary" /> Bio & Education Timeline
            </Typography>

            <Stack spacing={2.5}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Chip
                  label="2021"
                  color="primary"
                  sx={{ fontWeight: 700, minWidth: 65, borderRadius: "8px" }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    Bachelor's Degree in Computer Engineering
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Graduated from Faculty of Engineering, Mahidol University, Thailand.
                  </Typography>
                </Box>
              </Box>

              <Divider flexItem sx={{ borderStyle: "dashed" }} />

              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Chip
                  label="2017"
                  variant="outlined"
                  sx={{ fontWeight: 700, minWidth: 65, borderRadius: "8px", borderColor: muiTheme.palette.primary.main, color: muiTheme.palette.primary.main }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    Secondary Education Completion
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Completed high school education at Phichit Pittayakom School.
                  </Typography>
                </Box>
              </Box>

              <Divider flexItem sx={{ borderStyle: "dashed" }} />

              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Chip
                  label="1999"
                  variant="outlined"
                  sx={{ fontWeight: 700, minWidth: 65, borderRadius: "8px" }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    Born in Bangkok, Thailand
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Grew up with a strong passion for computers, coding, and competitive technology.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Paper>

          {/* Main Tech Skills Grid */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: "20px",
            }}
          >
            <Typography variant="h5" fontWeight={700} sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
              <CodeIcon color="primary" /> Core Technical Stack
            </Typography>

            <Grid container spacing={2}>
              {mainSkills.map((skill) => (
                <Grid item xs={12} sm={6} md={4} key={skill.category}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: 2,
                      borderRadius: "14px",
                      backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
                      border: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(0, 0, 0, 0.05)",
                      transition: "transform 0.2s ease, border-color 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        borderColor: muiTheme.palette.primary.main,
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {skill.icon}
                        <Typography variant="caption" fontWeight={700} color="primary" sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {skill.category}
                        </Typography>
                      </Box>
                      <Chip label={skill.badge} size="small" variant="outlined" sx={{ fontSize: "0.65rem", fontWeight: 700 }} />
                    </Box>
                    <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Other Skills & Specialized Domain Knowledge */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: "20px",
            }}
          >
            <Typography variant="h5" fontWeight={700} sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
              <TrendingUpIcon color="primary" /> Domain Expertise & Interests
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "14px",
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
                    border: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <TrendingUpIcon color="secondary" sx={{ mb: 1, fontSize: "2rem" }} />
                  <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
                    Technical Analysis
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Financial chart analysis, price action modeling, and momentum technical indicators.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "14px",
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
                    border: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <TerminalIcon color="primary" sx={{ mb: 1, fontSize: "2rem" }} />
                  <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
                    Trading Strategy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantitative risk management, systematic market backtesting, and algorithmic concepts.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "14px",
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
                    border: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <SportsEsportsIcon color="error" sx={{ mb: 1, fontSize: "2rem" }} />
                  <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
                    Esport & Gaming
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Competitive gaming player background with deep appreciation for high-rate reflexes and team strategy.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Stack>
      )}

      {/* Tab 1: Projects Showcase */}
      {activeTab === 1 && (
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
            <CodeIcon color="primary" /> Featured Projects
          </Typography>

          <Grid container spacing={3}>
            {projects.map((proj) => (
              <Grid item xs={12} sm={6} key={proj.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "16px",
                    p: 2,
                  }}
                >
                  <CardContent sx={{ p: 1 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                      {proj.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {proj.desc}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                      {proj.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            backgroundColor: isDark ? "rgba(99, 102, 241, 0.15)" : "rgba(79, 70, 229, 0.08)",
                            color: isDark ? "#818CF8" : "#4F46E5",
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 1, pt: 0 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      component="a"
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      sx={{ fontWeight: 600 }}
                    >
                      Source Code
                    </Button>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      component="a"
                      href={proj.demo}
                      sx={{ fontWeight: 600 }}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}

      {/* Tab 2: Posts / Writings */}
      {activeTab === 2 && (
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
            <ArticleIcon color="primary" /> Engineering Posts & Articles
          </Typography>

          <Stack spacing={2}>
            {posts.map((post) => (
              <Paper key={post.title} elevation={0} sx={{ p: 3, borderRadius: "16px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                  <Typography variant="caption" color="text.secondary" fontWeight={600}>
                    {post.date} • {post.readTime}
                  </Typography>
                </Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.summary}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Stack>
      )}

      {/* Tab 3: Source & Contact */}
      {activeTab === 3 && (
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon color="primary" /> Get in Touch
          </Typography>

          <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, borderRadius: "20px" }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
              Let's connect and build together!
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Feel free to reach out for frontend engineering opportunities, collaboration, or technical discussions.
            </Typography>

            <Box
              sx={{
                p: 2,
                borderRadius: "12px",
                backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
                flexWrap: "wrap",
                gap: 1.5,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <EmailIcon color="primary" />
                <Typography variant="body1" fontWeight={600} className="font-mono">
                  taninjackie@gmail.com
                </Typography>
              </Box>
              <Tooltip title={copied ? "Copied!" : "Copy Email"}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleCopyEmail}
                  startIcon={copied ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                  sx={{ fontWeight: 600 }}
                >
                  {copied ? "Copied" : "Copy"}
                </Button>
              </Tooltip>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  startIcon={<GitHubIcon />}
                  component="a"
                  href="https://github.com/taninjackie"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ py: 1.5, borderRadius: "12px", justifyContent: "flex-start", fontWeight: 700 }}
                >
                  GitHub Repository: @taninjackie
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  startIcon={<CodeIcon />}
                  component="a"
                  href="https://github.com/taninjackie/My-Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ py: 1.5, borderRadius: "12px", justifyContent: "flex-start", fontWeight: 700 }}
                >
                  View Source Code
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Stack>
      )}
    </Box>
  );
};