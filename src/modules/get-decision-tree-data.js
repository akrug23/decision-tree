export default function getDecisionTreeData(branch, id) {
    let decisionTreeData = { 
        k12: {
          1: {
            question: "How long until you intend to use/withdraw the funds?",
            answers: [
              {
                text: "0-5 years", 
                next: 2
              },
              {
                text: "6+ years", 
                next: 3
              }
            ]
          },
          2: {
            question: "How would you describe your risk tolerance as it pertains to investing?",
            lastStep: true,
            answers: [
              {
                text: "Low", 
                solution: [21,20,12]
              },
              {
                text: "Medium", 
                solution: [10,19,16]
              },
              {
                text: "High", 
                solution: [18,15,14,17]
              }
            ]
          },
          3: {
            question: "How would you describe your risk tolerance as it pertains to investing?",
            lastStep: true,
            answers: [
              {
                text: "Low", 
                solution: [10,19,16]
              },
              {
                text: "Medium", 
                solution: [18,15,14,17]
              },
              {
                text: "High", 
                solution: [11,23,9,13,22]
              }
            ]
          }
        },
        higher: {
          1: {
            question: "1 Do you prefer to manage the asset allocation or just set it and forget it?",
            answers: [
              {
                text: "Set it and forget it", 
                next: 2
              },
              {
                text: "Manage it myself", 
                next: 3
              }
            ]
          },
          2: {
            question: "2 How old is the beneficiary you're saving for?",
            lastStep: true,
            answers: [
              {
                text: "0-6 years old", 
                solution: [1,2,3]
              },
              {
                text: "7-12 years old", 
                solution: [3,4,5]
              },
              {
                text: "13+ years old", 
                solution: [5,6]
              }
            ]
          },
          3: {
            question: "3 How would you describe your risk tolerance as it pertains to investing?",
            answers: [
              {
                text: "Low", 
                next: 4
              },
              {
                text: "Medium", 
                next: 8
              },
              {
                text: "High", 
                next: 12
              }
            ]
          },
          4: {
            question: "4 How long until you intend to use/withdraw the funds?",
            answers: [
              {
                text: "0-5 years", 
                next:5
              },
              {
                text: "6-12 years", 
                next: 6
              },
              {
                text: "13+ years", 
                next: 7
              }
            ]
          },
          5: {
            question: "5 Do you or the beneficiary reside in VA?",
            lastStep: true,
            answers: [
              {
                text: "No", 
                solution: [21,12,20]
              },
              {
                text: "Yes", 
                solution: [21,12,20,24]
              }
            ]
          },
          6: {
            question: "6 Do you or the beneficiary reside in VA?",
            lastStep: true,
            answers: [
              {
                text: "No", 
                solution: [19,16,10]
              },
              {
                text: "Yes", 
                solution: [19,16,10,24]
              }
            ]
          },
          7: {
            question: "7 Do you or the beneficiary reside in VA?",
            lastStep: true,
            answers: [
              {
                text: "No", 
                solution: [18,15,16,19]
              },
              {
                text: "Yes", 
                solution: [18,15,16,19,24]
              }
            ]
          },
          8: {
            question: "8 How long until you intend to use/withdraw the funds?",
            answers: [
              {
                text: "0-5 years", 
                next:9
              },
              {
                text: "6-12 years", 
                next: 10
              },
              {
                text: "13+ years", 
                next: 11
              }
            ]
          },
          9: {
            question: "9 Do you or the beneficiary reside in VA?",
            lastStep: true,
            answers: [
              {
                text: "No", 
                solution: [18,15,16,19]
              },
              {
                text: "Yes", 
                solution: [18,15,16,19,24]
              }
            ]
          },
          10: {
            question: "10 Do you or the beneficiary reside in VA?",
            lastStep: true,
            answers: [
              {
                text: "No", 
                solution: [18,15,14,17]
              },
              {
                text: "Yes", 
                solution: [18,15,14,17,24]
              }
            ]
          },
          11: {
            question: "11 Do you or the beneficiary reside in VA?",
            lastStep: true,
            answers: [
              {
                text: "No", 
                solution: [15,14,17]
              },
              {
                text: "Yes", 
                solution: [14,17,24]
              }
            ]
          },
          12: {
            question: "12 How long until you intend to use/withdraw the funds?",
            lastStep: true,
            answers: [
              {
                text: "0-5 years", 
                solution: [18,15,14,17]
              },
              {
                text: "6-12 years", 
                solution: [11,23,9,13,22]
              },
              {
                text: "13+ years", 
                solution: [11,23,9,13,22]
              }
            ]
          }
        }
      };
    
    return decisionTreeData[branch][id];
  }