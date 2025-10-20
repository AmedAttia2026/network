const quizData = {
    courseTitle: "Linux Server Administration",
    serverAdminQuiz: {
        title: "Server Administration Quiz",
        data: [
            // --- Part 1: Fill in the Blank ---
            { type: 'text', q: "1. Linux is ________ software, meaning it's free to use and modify, while Windows requires client access licenses.", correct: "open-source" },
            { type: 'text', q: "2. RAID stands for Redundant Array of ________ Disks.", correct: "Independent" },
            { type: 'text', q: "3. RAID 0 uses a method called ________ where data is split evenly across multiple disks.", correct: "striping" },
            { type: 'text', q: "4. ________ can survive two simultaneous disk failures by using double parity blocks.", correct: "RAID 6" },
            { type: 'text', q: "5. In LVM terminology, PV stands for ________ Volume.", correct: "Physical" },
            { type: 'text', q: "6. LVM allows administrators to take ________ for backups or testing purposes.", correct: "snapshots" },
            
            // --- Part 2: True or False and Correct the False Statements ---
            { type: 'true_false', q: "9. Windows Server is more lightweight and efficient than Linux in terms of resource usage.", correct: false, correction: "Linux is more lightweight and efficient; Windows requires more CPU, RAM, and disk space." },
            { type: 'true_false', q: "10. RAID 0 provides maximum data safety through complete redundancy.", correct: false, correction: "RAID 0 provides maximum performance but has no redundancy/safety." },
            { type: 'true_false', q: "11. RAID 1 provides fast write speeds and 100% usable disk space.", correct: false, correction: "RAID 1 provides data protection and fast reads, but has slower writes and results in 50% space waste." },
            { type: 'true_false', q: "12. LVM stands for Logical Volume Manager and provides flexible storage management.", correct: true },
            { type: 'true_false', q: "13. RAID 5 requires a minimum of two disks and can survive one disk failure.", correct: false, correction: "RAID 5 requires a minimum of 3+ disks and can survive one disk failure." },
            { type: 'true_false', q: "14. Linux uses centralised package managers while Windows requires manually downloading installers.", correct: true },
            { type: 'true_false', q: "15. RAID 10 combines mirroring and striping for both performance and safety.", correct: true },

            // --- Part 3: Multiple Choice/Arrangement ---
            { 
                type: 'mcq', 
                q: "17. Detect the minimum number of drives needed for each RAID type:", 
                options: [
                    "A. RAID 0: 2+ disks",
                    "B. RAID 1: 2+ disks",
                    "C. RAID 5: 3+ disks",
                    "D. RAID 10: 4+ drives"
                ], 
                correct: [0, 1, 2, 3] 
            },
            { 
                type: 'arrangement', 
                q: "18. Arrange the next compounds from the basic layer to higher (LVM):", 
                options: [
                    "A. Physical Volume (PV)",
                    "B. Logical Volume (LV)",
                    "C. Volume Group (VG)"
                ], 
                correct_order: [0, 2, 1] // PV -> VG -> LV
            },

            // --- Part 4: Technical Terms ---
            { type: 'text', q: "19. A method for combining multiple partitions on different disks into one large virtual device", correct: "RAID (Redundant Array of Independent Disks)" },
            { type: 'text', q: "20. The storage management system that offers enhanced flexibility, scalability, and reliability in Linux", correct: "LVM (Logical Volume Manager)" },
            { type: 'text', q: "21. RAID configuration that uses striping with no redundancy", correct: "RAID 0" },
            { type: 'text', q: "22. The LVM component that represents individual hard drives or partitions", correct: "Physical Volume (PV)" },

            // --- Part 5: Short Answer ---
            { type: 'text', q: "24. What are two advantages of using RAID in server environments?", correct: "Data redundancy/fault tolerance and Higher performance." },
            { type: 'text', q: "25. What are two benefits of LVM compared to traditional partition management?", correct: "Flexible capacity (dynamic resizing) and Snapshots (for backups/testing)." },
            { type: 'text', q: "26. Name two reasons why Linux might be preferred over Windows for server environments.", correct: "Lower Cost (open-source) and Better Performance/Efficiency (more lightweight)." },
            
            // --- Part 6: Analysis and Justification Question ---
            { 
                type: 'text', 
                q: "27. Fault Tolerance Planning: Which RAID level provides the highest level of fault tolerance for large arrays, and what specific mechanism does it use to achieve this protection?", 
                correct: "RAID 6. It uses Double Parity (two parity blocks) to survive two simultaneous disk failures."
            },
            { 
                type: 'text', 
                q: "28. System Administration Efficiency: What key feature of Linux server administration addresses the inefficiency of manually downloading and installing updates, and how does this approach simplify software management?", 
                correct: "Centralized Package Manager. It automates installation, updates, and dependency management from centralized, trusted repositories."
            }
        ]
    }
};
