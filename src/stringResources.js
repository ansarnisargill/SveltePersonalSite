let data = {
    name: "Ansar Nisar",
    job: "Software Engineer",
    notes: {
        codeSnippets: {
            rename_with_powershell: `Get-ChildItem -Filter "search-term*" -Recurse | Rename-Item -NewName {; $_.name -replace 'old-name','new-name'}`
        },
        links: [
            {
                link: "/notes/how-to-rename-all-files-in-a-directory",
                heading: "How to rename all the files in a directory"
            }
        ]
    }
};
export default data;