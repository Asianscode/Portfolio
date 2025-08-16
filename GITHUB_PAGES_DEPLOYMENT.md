# Deploy to GitHub Pages - Complete Guide

## 📋 Prerequisites
- GitHub account
- Git installed on your computer (optional, can use GitHub web interface)

## 🚀 Quick Deployment Steps

### Method 1: Upload ZIP to GitHub (Recommended)

1. **Download the project ZIP**
   - Download `biotech-portfolio-github-pages.zip` from this Replit

2. **Create a new GitHub repository**
   - Go to GitHub.com and sign in
   - Click the "+" icon → "New repository"
   - **Important**: Name it exactly `biotech-portfolio` for the deployment to work correctly
   - Make sure it's **Public** (required for free GitHub Pages)
   - Don't initialize with README (we have our own)
   - Click "Create repository"

3. **Upload project files**
   - Extract the ZIP file on your computer
   - On GitHub repository page, click "uploading an existing file"
   - Drag and drop ALL files from the extracted folder
   - Write commit message: "Initial biotech portfolio deployment"
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings tab
   - Scroll down to "Pages" section (left sidebar)
   - Under "Source", select **"GitHub Actions"**
   - Save the settings

5. **Wait for automatic deployment**
   - Go to the "Actions" tab in your repository
   - You'll see "Deploy to GitHub Pages" workflow running
   - Wait for it to complete (usually 3-5 minutes)
   - Your site will be live at: `https://[your-username].github.io/biotech-portfolio/`

### Method 2: Git Command Line (Advanced)

If you prefer using Git commands:

```bash
# Navigate to extracted project folder
cd path/to/extracted/biotech-portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as origin
git remote add origin https://github.com/[your-username]/[repo-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🔧 Configuration Notes

### Repository Name Impact
If your repository name is NOT your username, you need to update the base path:

1. **For repo named differently than username**:
   - Repository: `https://github.com/Asianscode/my-portfolio`
   - Site URL will be: `https://asianscode.github.io/my-portfolio/`

2. **For repo named same as username**:
   - Repository: `https://github.com/Asianscode/Asianscode.github.io`
   - Site URL will be: `https://asianscode.github.io/`

### Troubleshooting

**If deployment fails:**
1. Check the Actions tab for error messages
2. Ensure all files were uploaded correctly
3. Verify GitHub Pages is enabled in Settings
4. Make sure repository is Public

**If 3D elements don't load:**
1. Check browser console for errors
2. Ensure all asset files were uploaded
3. Some browsers block WebGL on GitHub Pages - try different browser

**If styles look broken:**
1. Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
2. Check if CSS files are loaded in browser dev tools

## 📝 After Deployment

1. **Test your site** thoroughly on different devices
2. **Update README.md** with your actual site URL
3. **Share your portfolio** on LinkedIn, resume, etc.
4. **Keep it updated** by pushing new commits to main branch

## 🔄 Making Updates

To update your live site:
1. Make changes to your local files
2. Commit and push to GitHub main branch
3. GitHub Actions will automatically redeploy
4. Changes appear in 2-3 minutes

Your professional biotech portfolio will be live and accessible to employers, collaborators, and the scientific community!

---

Need help? Check the Actions tab in your GitHub repository for deployment logs and error messages.