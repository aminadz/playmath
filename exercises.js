// ملف التمارين الموسع للتعليم المتوسط
const extendedExercises = {
    1: { // السنة الأولى متوسط
        "الجمع والطرح والضرب": {
            exercises: [
                {
                    question: "أوجد ناتج جمع العددين التاليين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">45 + 55 = ?</div>",
                    options: ["90", "100", "110", "95"],
                    answer: "100"
                },
                {
                    question: "اشترى أحمد كتابًا بسعر <span dir='ltr'>DA</span> 250 ومحفظة بسعر <span dir='ltr'>DA</span> 150. ما هو المبلغ الإجمالي الذي دفعه أحمد؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">250 + 150 = ?</div>",
                    options: ["<span dir='ltr'>DA</span> 350", "<span dir='ltr'>DA</span> 400", "<span dir='ltr'>DA</span> 450", "<span dir='ltr'>DA</span> 500"],
                    answer: "<span dir='ltr'>DA</span> 400"
                },
                {
                    question: "أحسب جداء العددين التاليين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">15 * 4 = ?</div>",
                    options: ["50", "60", "70", "80"],
                    answer: "60"
                },
                {
                    question: "كان في حوزة سارة <span dir='ltr'>DA</span> 500، اشترت لعبة بسعر <span dir='ltr'>DA</span> 350. كم بقي معها؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">500 - 350 = ?</div>",
                    options: ["<span dir='ltr'>DA</span> 100", "<span dir='ltr'>DA</span> 250", "<span dir='ltr'>DA</span> 200", "<span dir='ltr'>DA</span> 150"],
                    answer: "<span dir='ltr'>DA</span> 150"
                },
                {
                    question: "أوجد ناتج طرح العددين التاليين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">95 - 30 = ?</div>",
                    options: ["65", "60", "75", "70"],
                    answer: "65"
                }
            ]
        },
        "الكتابة العشرية والكسرية": {
            exercises: [
                {
                    question: "اكتب العدد العشري 3,75 على شكل كسر عشري:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">3,75 = ?</div>",
                    options: ["375/100", "375/10", "3/75", "75/100"],
                    answer: "375/100"
                },
                {
                    question: "اكتب الكسر 5/10 على شكل عدد عشري:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">5/10 = ?</div>",
                    options: ["5,0", "0,05", "0,5", "50"],
                    answer: "0,5"
                },
                {
                    question: "ما هي الكتابة العشرية للكسر 25/1000؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">25/1000 = ?</div>",
                    options: ["0,25", "2,5", "0,025", "0,0025"],
                    answer: "0,025"
                },
                {
                    question: "حول العدد 12,3 إلى كتابة كسرية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">12,3 = ?</div>",
                    options: ["123/100", "123/10", "12/3", "1,23/10"],
                    answer: "123/10"
                },
                {
                    question: "ما هو العدد العشري الموافق للكسر 7/2؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">7 / 2 = ?</div>",
                    options: ["3,5", "3,0", "2,5", "7,2"],
                    answer: "3,5"
                }
            ]
        },
        "مقارنة وترتيب الأعداد العشرية": {
            exercises: [
                {
                    question: "ضع الرمز المناسب ( > أو < أو = ) مكان النقط لقراءة العبارة من اليسار إلى اليمين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">15,7 ... 15,70</div>",
                    options: ["=", ">", "<", "لا يمكن المقارنة"],
                    answer: "="
                },
                {
                    question: "ضع الرمز المناسب ( > أو < ) مكان النقط لقراءة العبارة من اليسار إلى اليمين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">8,09 ... 8,9</div>",
                    options: [">", "<", "="],
                    answer: ">"
                },
                {
                    question: "رتب الأعداد التالية ترتيبًا تصاعديًا (من اليسار إلى اليمين):<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">5,4 | 5,04 | 4,5 | 5,14</div>",
                    options: ["5,4 | 5,14 | 5,04 | 4,5", "4,5 | 5,04 | 5,14 | 5,4", "5,04 | 4,5 | 5,4 | 5,14"],
                    answer: "5,4 | 5,14 | 5,04 | 4,5"
                },
                {
                    question: "ضع الرمز المناسب ( > أو < ) مكان النقط لقراءة العبارة من اليسار إلى اليمين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">23,1 ... 23,099</div>",
                    options: [">", "<", "="],
                    answer: "<"
                },
                {
                    question: "رتب الأعداد التالية ترتيبًا تنازليًا (من اليسار إلى اليمين):<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">0,09 | 1,2 | 0,8 | 0,85</div>",
                    options: ["0,09 | 0,8 | 0,85 | 1,2", "0,09 | 0,85 | 0,8 | 1,2", "1,2 | 0,85 | 0,8 | 0,09"],
                    answer: "0,09 | 0,8 | 0,85 | 1,2"
                }
            ]
        },
        "القسمة العشرية وحالاتها": {
            exercises: [
                {
                    question: "أوجد حاصل قسمة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">25,5 / 5 = ?</div>",
                    options: ["5,1", "5,01", "51", "0,51"],
                    answer: "5,1"
                },
                {
                    question: "قسم مبلغ <span dir='ltr'>DA</span> 1200 بالتساوي على 4 أصدقاء. ما هي حصة كل واحد؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">1200 / 4 = ?</div>",
                    options: ["<span dir='ltr'>DA</span> 300", "<span dir='ltr'>DA</span> 250", "<span dir='ltr'>DA</span> 400", "<span dir='ltr'>DA</span> 200"],
                    answer: "<span dir='ltr'>DA</span> 300"
                },
                {
                    question: "ما هو ناتج قسمة 10 على 4؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">10 / 4 = ?</div>",
                    options: ["2,25", "2,5", "3,0", "2,0"],
                    answer: "2,5"
                },
                {
                    question: "أوجد حاصل القسمة المقرب إلى 0,1 بالنقصان للعملية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">17 / 3</div>",
                    options: ["5,6", "5,7", "5,5", "5,8"],
                    answer: "5,6"
                },
                {
                    question: "إذا كان سعر 3 كراسات هو <span dir='ltr'>DA</span> 105، فما هو سعر الكراس الواحد؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">105 / 3 = ?</div>",
                    options: ["<span dir='ltr'>DA</span> 30", "<span dir='ltr'>DA</span> 40", "<span dir='ltr'>DA</span> 35", "<span dir='ltr'>DA</span> 45"],
                    answer: "<span dir='ltr'>DA</span> 35"
                }
            ]
        },
        "التوازي والتعامد": {
            exercises: [
                {
                    question: "إذا كان المستقيم (D1) يوازي المستقيم (D2)، والمستقيم (L) عمودي على (D1)، فما هي وضعية المستقيم (L) بالنسبة للمستقيم (D2)؟",
                    options: ["يوازيه", "عمودي عليه", "يقطعه وغير عمودي عليه", "ينطبق عليه"],
                    answer: "عمودي عليه"
                },
                {
                    question: "ماذا نسمي مستقيمين يتقاطعان ويشكلان زاوية قائمة؟",
                    options: ["متوازيان", "متعامدان", "متقاطعان", "متطابقان"],
                    answer: "متعامدان"
                },
                {
                    question: "في المربع ABCD، ما هي وضعية الضلع [AB] بالنسبة للضلع [CD]؟",
                    options: ["متوازيان", "متعامدان", "متقاطعان", "لا شيء مما سبق"],
                    answer: "متوازيان"
                },
                {
                    question: "إذا كان المستقيم (d) يوازي المستقيم (f)، والمستقيم (f) يوازي المستقيم (g)، فما هي وضعية المستقيم (d) بالنسبة للمستقيم (g)؟",
                    options: ["متعامدان", "متوازيان", "متقاطعان"],
                    answer: "متوازيان"
                },
                {
                    question: "في المستطيل EFGH، ما هي وضعية الضلع [EF] بالنسبة للضلع [FG]؟",
                    options: ["متوازيان", "متعامدان", "متقاطعان وغير متعامدين"],
                    answer: "متعامدان"
                }
            ]
        },
        "إنشاء مثلثات وأشكال هندسية خاصة": {
            exercises: [
                {
                    question: "ما هو الشكل الرباعي الذي أضلاعه الأربعة متقايسة وزواياه الأربعة قائمة؟",
                    options: ["مربع", "مستطيل", "معين", "متوازي أضلاع"],
                    answer: "مربع"
                },
                {
                    question: "مثلث لديه ضلعان متقايسان فقط. ماذا يسمى؟",
                    options: ["متساوي الساقين", "قائم", "متقايس الأضلاع", "كيفي"],
                    answer: "متساوي الساقين"
                },
                {
                    question: "ما هي الأداة الهندسية التي نستخدمها لرسم دائرة؟",
                    options: ["مسطرة", "كوس", "منقلة", "مدور"],
                    answer: "مدور"
                },
                {
                    question: "مثلث أضلاعه الثلاثة متقايسة. ماذا يسمى؟",
                    options: ["متساوي الساقين", "قائم", "متقايس الأضلاع", "كيفي"],
                    answer: "متقايس الأضلاع"
                },
                {
                    question: "مثلث إحدى زواياه قائمة. ماذا يسمى؟",
                    options: ["متقايس الأضلاع", "متساوي الساقين", "قائم", "كيفي"],
                    answer: "قائم"
                }
            ]
        },
        "حساب المحيط والمساحة": {
            exercises: [
                {
                    question: "مستطيل طوله <span dir='ltr'>cm</span> 8 وعرضه <span dir='ltr'>cm</span> 5. ما هو محيطه؟",
                    options: ["<span dir='ltr'>cm</span> 26", "<span dir='ltr'>cm</span> 13", "<span dir='ltr'>cm</span> 40", "<span dir='ltr'>cm</span> 21"],
                    answer: "<span dir='ltr'>cm</span> 26",
                    solution: "P = (8 + 5) * 2 = 26"
                },
                {
                    question: "مربع طول ضلعه <span dir='ltr'>cm</span> 6. ما هي مساحته؟",
                    options: ["<span dir='ltr'>cm²</span> 24", "<span dir='ltr'>cm²</span> 36", "<span dir='ltr'>cm²</span> 12", "<span dir='ltr'>cm²</span> 18"],
                    answer: "<span dir='ltr'>cm²</span> 36",
                    solution: "A = 6 * 6 = 36"
                },
                {
                    question: "ما هو محيط مربع طول ضلعه <span dir='ltr'>cm</span> 7؟",
                    options: ["<span dir='ltr'>cm</span> 14", "<span dir='ltr'>cm</span> 21", "<span dir='ltr'>cm</span> 28", "<span dir='ltr'>cm</span> 49"],
                    answer: "<span dir='ltr'>cm</span> 28",
                    solution: "P = 7 * 4 = 28"
                },
                {
                    question: "أوجد مساحة مستطيل طوله <span dir='ltr'>m</span> 10 وعرضه <span dir='ltr'>m</span> 4.",
                    options: ["<span dir='ltr'>m²</span> 40", "<span dir='ltr'>m²</span> 28", "<span dir='ltr'>m²</span> 14", "<span dir='ltr'>m²</span> 100"],
                    answer: "<span dir='ltr'>m²</span> 40",
                    solution: "A = 10 * 4 = 40"
                },
                {
                    question: "حديقة مربعة الشكل، طول ضلعها <span dir='ltr'>m</span> 15. أراد صاحبها إحاطتها بسياج. ما هو طول السياج اللازم؟",
                    options: ["<span dir='ltr'>m</span> 30", "<span dir='ltr'>m</span> 45", "<span dir='ltr'>m</span> 60", "<span dir='ltr'>m</span> 225"],
                    answer: "<span dir='ltr'>m</span> 60",
                    solution: "P = 15 * 4 = 60"
                }
            ]
        },
        "التناظر المحوري": {
            exercises: [
                {
                    question: "ما هو نظير نقطة بالنسبة لمستقيم (محور)؟",
                    options: ["نقطة", "مستقيم", "دائرة", "قطعة مستقيمة"],
                    answer: "نقطة"
                },
                {
                    question: "ما هو نظير قطعة مستقيمة بالنسبة لمحور؟",
                    options: ["قطعة مستقيمة تقايسها", "نقطة", "مستقيم يوازيها", "دائرة"],
                    answer: "قطعة مستقيمة تقايسها"
                },
                {
                    question: "كم عدد محاور التناظر في المربع؟",
                    options: ["1", "2", "3", "4"],
                    answer: "4"
                },
                {
                    question: "كم عدد محاور التناظر في الدائرة؟",
                    options: ["1", "2", "4", "عدد غير منته"],
                    answer: "عدد غير منته"
                },
                {
                    question: "ما هو نظير زاوية بالنسبة لمحور؟",
                    options: ["زاوية تقايسها", "زاوية قائمة", "زاوية منفرجة", "نقطة"],
                    answer: "زاوية تقايسها"
                }
            ]
        },
        "جمع وطرح وضرب كسور عشرية": {
            exercises: [
                {
                    question: "أوجد ناتج الجمع (نفس المقام):<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">3/10 + 4/10 = ?</div>",
                    options: ["7/10", "8/10", "9/10", "6/10"],
                    answer: "7/10",
                    solution: "3/10 + 4/10 = (3+4)/10 = 7/10"
                },
                {
                    question: "أوجد ناتج الطرح (نفس المقام):<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">8/100 - 5/100 = ?</div>",
                    options: ["2/100", "3/100", "4/100", "1/100"],
                    answer: "3/100",
                    solution: "8/100 - 5/100 = (8-5)/100 = 3/100"
                },
                {
                    question: "أوجد ناتج الجمع (مقامات مختلفة):<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2/10 + 5/10 = ?</div>",
                    options: ["7/10", "8/10", "9/10", "6/10"],
                    answer: "7/10",
                    solution: "2/10 + 5/10 = (2+5)/10 = 7/10"
                },
                {
                    question: "أوجد ناتج الطرح (مقامات مختلفة):<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">8/100 - 5/100 = ?</div>",
                    options: ["3/100", "4/100", "5/100", "2/100"],
                    answer: "3/100",
                    solution: "8/100 - 5/100 = (8-5)/100 = 3/100"
                },
                {
                    question: "أوجد ناتج الضرب:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2/10 × 3/10 = ?</div>",
                    options: ["6/100", "8/100", "10/100", "12/100"],
                    answer: "6/100",
                    solution: "2/10 × 3/10 = (2×3)/(10×10) = 6/100"
                },
                {
                    question: "أوجد ناتج الجمع (مقامات مختلفة):<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">1/10 + 5/100 = ?</div>",
                    options: ["15/100", "16/100", "17/100", "18/100"],
                    answer: "15/100",
                    solution: "1/10 + 5/100 = 10/100 + 5/100 = (10+5)/100 = 15/100"
                },
                {
                    question: "أوجد ناتج الطرح (مقامات مختلفة):<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">5/10 - 3/10 = ?</div>",
                    options: ["2/10", "3/10", "4/10", "1/10"],
                    answer: "2/10",
                    solution: "5/10 - 3/10 = (5-3)/10 = 2/10"
                },
                {
                    question: "أوجد ناتج الضرب:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">3/100 × 4/10 = ?</div>",
                    options: ["12/1000", "15/1000", "18/1000", "20/1000"],
                    answer: "12/1000",
                    solution: "3/100 × 4/10 = (3×4)/(100×10) = 12/1000"
                }
            ]
        },
        "تمثيل على مستقيم مدرج": {
            exercises: [
                {
                    question: "على مستقيم مدرج، ما هي النقطة التي فاصلتها 3,5؟",
                    options: ["تقع بين 3 و 4", "تقع بين 2 و 3", "تقع عند 3", "تقع عند 4"],
                    answer: "تقع بين 3 و 4"
                },
                {
                    question: "إذا كانت النقطة A فاصلتها 2 والنقطة B فاصلتها 5، ما هي المسافة بين A و B؟",
                    options: ["2 وحدة", "3 وحدات", "4 وحدات", "5 وحدات"],
                    answer: "3 وحدات"
                },
                {
                    question: "ما هي فاصلة منتصف القطعة [AB] حيث فاصلة A هي 1 وفاصلة B هي 7؟",
                    options: ["3", "4", "5", "4,5"],
                    answer: "4"
                },
                {
                    question: "على مستقيم مدرج، النقطة C فاصلتها -2. أين تقع؟",
                    options: ["على يمين الصفر", "على يسار الصفر", "عند الصفر", "لا يمكن تحديدها"],
                    answer: "على يسار الصفر"
                },
                {
                    question: "إذا كانت وحدة التدريج هي <span dir='ltr'>cm</span> 1، ما هي المسافة بين النقطة D ذات الفاصلة 4 والنقطة E ذات الفاصلة 9؟",
                    options: ["<span dir='ltr'>cm</span> 4", "<span dir='ltr'>cm</span> 9", "<span dir='ltr'>cm</span> 5", "<span dir='ltr'>cm</span> 13"],
                    answer: "<span dir='ltr'>cm</span> 5"
                }
            ]
        },
        "الإحداثيات في المستوى": {
            exercises: [
                {
                    question: "في معلم متعامد ومتجانس، ماذا يمثل العددان في إحداثيات نقطة (x, y)؟",
                    options: ["x: الترتيب، y: الفاصلة", "x: الفاصلة، y: الترتيب", "كلاهما فاصلة", "كلاهما ترتيب"],
                    answer: "x: الفاصلة، y: الترتيب"
                },
                {
                    question: "ما هي إحداثيات نقطة المبدأ O في معلم متعامد ومتجانس؟",
                    options: ["(1, 1)", "(0, 0)", "(1, 0)", "(0, 1)"],
                    answer: "(0, 0)"
                },
                {
                    question: "إذا كانت إحداثيات النقطة A هي (3, 5)، ماذا تمثل القيمة 5؟",
                    options: ["الفاصلة", "الترتيب", "المسافة إلى المبدأ", "لا شيء مما سبق"],
                    answer: "الفاصلة"
                },
                {
                    question: "نقطة تقع على محور الفواصل. ماذا تكون قيمة ترتيبها؟",
                    options: ["1", "1-", "0", "تعتمد على الفاصلة"],
                    answer: "0"
                },
                {
                    question: "نقطة تقع على محور التراتيب. ماذا تكون قيمة فاصلتها؟",
                    options: ["1", "1-", "0", "تعتمد على الترتيب"],
                    answer: "0"
                }
            ]
        },
        "إنتاج عبارات حرفية بسيطة": {
            exercises: [
                {
                    question: "عبر بدلالة x عن محيط مربع طول ضلعه x.",
                    options: ["4x", "x²", "2x", "x+4"],
                    answer: "4x"
                },
                {
                    question: "اشترى أحمد أقلامًا بسعر 15 DA للقلم الواحد. عبر عن المبلغ الذي يدفعه أحمد بدلالة عدد الأقلام n.",
                    options: ["15 + n", "15n", "15 - n", "n/15"],
                    answer: "15n"
                },
                {
                    question: "عمر ليلى يزيد عن عمر أخيها بـ 3 سنوات. إذا كان عمر أخيها y، فما هو عمر ليلى بدلالة y؟",
                    options: ["y - 3", "3y", "y + 3", "y/3"],
                    answer: "y + 3"
                },
                {
                    question: "عبر عن مساحة مستطيل طوله L وعرضه <span dir='ltr'>cm</span> 5.",
                    options: ["L + 5", "2(L+5)", "5L", "L/5"],
                    answer: "5L"
                },
                {
                    question: "ما هي العبارة الحرفية التي تعبر عن 'ضعف عدد مضاف إليه 7'؟ (ليكن العدد هو z)",
                    options: ["z + 2 + 7", "2z + 7", "7z + 2", "2(z+7)"],
                    answer: "2z + 7"
                }
            ]
        },
        "تطبيق قاعدة حرفية": {
            exercises: [
                {
                    question: "إذا كانت العبارة الحرفية لمحيط مربع هي 4x، احسب محيط مربع طول ضلعه <span dir='ltr'>cm</span> 5.",
                    options: ["<span dir='ltr'>cm</span> 20", "<span dir='ltr'>cm</span> 25", "<span dir='ltr'>cm</span> 16", "<span dir='ltr'>cm</span> 9"],
                    answer: "<span dir='ltr'>cm</span> 20",
                    solution: "P = 4 * 5 = 20"
                },
                {
                    question: "من أجل x = 3، ما هي قيمة العبارة 2x + 5؟",
                    options: ["11", "10", "8", "16"],
                    answer: "11",
                    solution: "2 * 3 + 5 = 11"
                },
                {
                    question: "مساحة مستطيل هي L * w. إذا كان L = <span dir='ltr'>m</span> 10 و w = <span dir='ltr'>m</span> 7، فما هي مساحته؟",
                    options: ["<span dir='ltr'>m²</span> 70", "<span dir='ltr'>m²</span> 17", "<span dir='ltr'>m²</span> 34", "<span dir='ltr'>m²</span> 3"],
                    answer: "<span dir='ltr'>m²</span> 70",
                    solution: "A = 10 * 7 = 70"
                },
                {
                    question: "إذا كانت y = 2x - 1، أوجد قيمة y عندما تكون x = 4.",
                    options: ["7", "8", "9", "6"],
                    answer: "7",
                    solution: "y = 2 * 4 - 1 = 7"
                },
                {
                    question: "سعر الدخول لحديقة هو DA 50 للكبار و DA 20 للأطفال. ما هو سعر الدخول لـ 2 كبار و 3 أطفال حسب القاعدة: 50a + 20b؟",
                    options: ["DA 160", "DA 150", "DA 170", "DA 140"],
                    answer: "DA 160",
                    solution: "50 * 2 + 20 * 3 = 160"
                }
            ]
        },
        "التعرف على وضعيات تناسبية": {
            exercises: [
                {
                    question: "إذا كان سعر <span dir='ltr'>kg</span> 3 من البرتقال هو <span dir='ltr'>DA</span> 450، فهل سعر <span dir='ltr'>kg</span> 6 هو <span dir='ltr'>DA</span> 900؟",
                    options: ["نعم، وضعية تناسبية", "لا، ليست وضعية تناسبية", "لا يمكن المعرفة"],
                    answer: "نعم، وضعية تناسبية"
                },
                {
                    question: "سيارة تقطع <span dir='ltr'>km</span> 100 في ساعة واحدة. هل تقطع <span dir='ltr'>km</span> 300 في 3 ساعات بنفس السرعة؟",
                    options: ["نعم", "لا"],
                    answer: "نعم"
                },
                {
                    question: "عمر شخص وطوله، هل هما متناسبان؟",
                    options: ["نعم", "لا"],
                    answer: "لا"
                },
                {
                    question: "في جدول تناسبية، إذا كان معامل التناسبية هو 5، وكان العدد في السطر الأول هو 4، فما هو العدد المقابل له في السطر الثاني؟",
                    options: ["9", "20", "1", "0.8"],
                    answer: "20"
                },
                {
                    question: "لتحضير كعكة لـ 4 أشخاص نحتاج <span dir='ltr'>g</span> 200 من الطحين. لكم شخص يمكننا تحضير كعكة باستعمال <span dir='ltr'>g</span> 500 من الطحين؟",
                    options: ["8 أشخاص", "10 أشخاص", "12 شخصًا", "6 أشخاص"],
                    answer: "10 أشخاص"
                }
            ]
        },
        "استعمال المقياس والنسب المئوية": {
            exercises: [
                {
                    question: "في قسم به 40 تلميذًا، نجح منهم 80%. ما هو عدد التلاميذ الناجحين؟",
                    options: ["30", "32", "35", "28"],
                    answer: "32",
                    solution: "40 * (80 / 100) = 32"
                },
                {
                    question: "سعر سترة <span dir='ltr'>DA</span> 2500. تم تخفيض سعرها بنسبة 20%. ما هي قيمة التخفيض؟",
                    options: ["<span dir='ltr'>DA</span> 400", "<span dir='ltr'>DA</span> 500", "<span dir='ltr'>DA</span> 600", "<span dir='ltr'>DA</span> 450"],
                    answer: "<span dir='ltr'>DA</span> 500",
                    solution: "2500 * (20 / 100) = 500"
                },
                {
                    question: "على خريطة، المسافة بين مدينتين هي <span dir='ltr'>cm</span> 5. إذا كان مقياس الخريطة هو 1/100000، فما هي المسافة الحقيقية بالكيلومتر؟",
                    options: ["<span dir='ltr'>km</span> 5", "<span dir='ltr'>km</span> 50", "<span dir='ltr'>km</span> 0,5", "<span dir='ltr'>km</span> 500"],
                    answer: "<span dir='ltr'>km</span> 5"
                },
                {
                    question: "حول النسبة المئوية 25% إلى كسر عشري.",
                    options: ["0,25", "2,5", "0,025", "25"],
                    answer: "0,25"
                },
                {
                    question: "إذا كانت المسافة الحقيقية بين نقطتين هي <span dir='ltr'>km</span> 20، والمسافة على التصميم هي <span dir='ltr'>cm</span> 10، فما هو مقياس هذا التصميم؟",
                    options: ["1/200000", "1/20000", "1/2000", "1/200"],
                    answer: "1/200000"
                }
            ]
        }
    },
    2: { // السنة الثانية متوسط
        "العمليات على الأعداد الطبيعية، العشرية، والكسور": {
            exercises: [
                {
                    question: "أحسب السلسلة التالية مع احترام أولوية العمليات:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">A = 15 + 5 * 2 = ?</div>",
                    options: ["40", "25", "35", "20"],
                    answer: "25"
                },
                {
                    question: "أحسب العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">B = (12 - 4) / 2 = ?</div>",
                    options: ["4", "10", "6", "8"],
                    answer: "4"
                },
                {
                    question: "أوجد ناتج جمع الكسرين التاليين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">1/3 + 4/3 = ?</div>",
                    options: ["5/6", "5/3", "4/9", "5/9"],
                    answer: "5/3"
                },
                {
                    question: "أحسب جداء الكسرين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2/5 * 3/4 = ?</div>",
                    options: ["6/20", "5/9", "8/15", "6/9"],
                    answer: "6/20"
                },
                {
                    question: "أحسب السلسلة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">C = 20 - (5 + 3 * 2) = ?</div>",
                    options: ["9", "16", "4", "11"],
                    answer: "9"
                }
            ]
        },
        "النشر والتحليل باستعمال خاصية التوزيع": {
            exercises: [
                {
                    question: "أنشر العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">5 * (x + 3) = ?</div>",
                    options: ["5x + 15", "5x + 3", "8x", "15x"],
                    answer: "5x + 15"
                },
                {
                    question: "حلل العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">7a - 21 = ?</div>",
                    options: ["7(a - 3)", "7(a - 21)", "a(7 - 21)", "3(7a - 7)"],
                    answer: "7(a - 3)"
                },
                {
                    question: "استعمل خاصية التوزيع لحساب الجداء التالي بطريقة بسيطة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">12 * 102 = 12 * (100 + 2) = ?</div>",
                    options: ["1224", "1202", "1220", "1324"],
                    answer: "1224"
                },
                {
                    question: "أنشر وبسط العبارة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">k * (a - b) = ?</div>",
                    options: ["ka - kb", "ka + kb", "k - a - b", "k(a+b)"],
                    answer: "ka - kb"
                },
                {
                    question: "ما هو العامل المشترك في العبارة التالية؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">4y + 4z</div>",
                    options: ["y", "z", "4", "yz"],
                    answer: "4"
                }
            ]
        },
        "حصر ناتج القسمة": {
            exercises: [
                {
                    question: "أعط حصراً إلى الوحدة لحاصل قسمة 22 على 7.<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">22 / 7 ≈ 3,14...</div>",
                    options: ["3 < 22/7 < 4", "2 < 22/7 < 3", "4 < 22/7 < 5", "1 < 22/7 < 2"],
                    answer: "3 < 22/7 < 4"
                },
                {
                    question: "ما هي القيمة المقربة إلى الوحدة بالنقصان لحاصل قسمة 17 على 3؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">17 / 3 ≈ 5,66...</div>",
                    options: ["5", "6", "4", "7"],
                    answer: "5"
                },
                {
                    question: "ما هي القيمة المقربة إلى الوحدة بالزيادة لحاصل قسمة 25 على 4؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">25 / 4 = 6,25</div>",
                    options: ["6", "7", "5", "8"],
                    answer: "7"
                },
                {
                    question: "أعط حصراً إلى 0,1 لحاصل قسمة 10 على 3.<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">10 / 3 ≈ 3,33...</div>",
                    options: ["3,3 < 10/3 < 3,4", "3,2 < 10/3 < 3,3", "3,4 < 10/3 < 3,5", "3,0 < 10/3 < 3,1"],
                    answer: "3,3 < 10/3 < 3,4"
                },
                {
                    question: "ما هو مدور حاصل قسمة 45 على 8 إلى الوحدة؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">45 / 8 = 5,625</div>",
                    options: ["5", "6", "5,6", "5,7"],
                    answer: "6"
                }
            ]
        },
        "التعرف على الأشكال الهندسية وعناصرها": {
            exercises: [
                {
                    question: "ما هو مجموع أقياس زوايا المثلث؟",
                    options: ["90°", "180°", "360°", "100°"],
                    answer: "180°"
                },
                {
                    question: "في متوازي الأضلاع، كل زاويتين متقابلتين هما...",
                    options: ["متكاملتان", "متتامتان", "متقايستان", "قائمتان"],
                    answer: "متقايستان"
                },
                {
                    question: "ماذا يسمى المثلث الذي له زاوية قائمة؟",
                    options: ["متساوي الساقين", "قائم", "متقايس الأضلاع", "كيفي"],
                    answer: "قائم"
                },
                {
                    question: "ما هي الخاصية التي يتميز بها قطرا المعين؟",
                    options: ["متوازيان", "متقايسان", "متعامدان وينصف كل منهما الآخر", "ينطبقان"],
                    answer: "متعامدان وينصف كل منهما الآخر"
                },
                {
                    question: "ماذا نسمي المستقيم الذي يشمل رأساً من رؤوس المثلث ويعامد الضلع المقابل له؟",
                    options: ["متوسط", "منصف", "محور", "ارتفاع"],
                    answer: "ارتفاع"
                }
            ]
        },
        "الإنشاءات (توازي، تعامد، منصف، محور قطعة)": {
            exercises: [
                {
                    question: "ما هي الأداة الهندسية الأساسية لرسم مستقيم عمودي على مستقيم آخر ويمر من نقطة معلومة؟",
                    options: ["المسطرة فقط", "المدور", "الكوس", "المنقلة"],
                    answer: "الكوس",
                    solution: "الكوس هي الأداة الأساسية لرسم مستقيم عمودي. ملاحظة: يمكن أيضاً استعمال المدور لرسم العمودي"
                },
                {
                    question: "لرسم مستقيم يوازي مستقيماً آخر من نقطة خارجة عنه، نعتمد على خاصية...",
                    options: ["التعامد", "التناظر", "التطابق", "الزوايا المتبادلة داخلياً"],
                    answer: "التعامد"
                },
                {
                    question: "ماذا نسمي نصف المستقيم الذي يقسم زاوية إلى زاويتين متقايستين؟",
                    options: ["محور", "متوسط", "منصف زاوية", "ارتفاع"],
                    answer: "منصف زاوية"
                },
                {
                    question: "محور قطعة مستقيمة هو المستقيم الذي...",
                    options: ["يوازيها", "عمودي عليها في منتصفها", "يقطعها في أحد أطرافها", "يشملها"],
                    answer: "عمودي عليها في منتصفها"
                },
                {
                    question: "لرسم محور قطعة مستقيمة بدقة، نستخدم...",
                    options: ["المسطرة فقط", "الكوس فقط", "المسطرة والمدور", "المنقلة"],
                    answer: "المسطرة والمدور"
                }
            ]
        },
        "التناظر المركزي": {
            exercises: [
                {
                    question: "ما هو نظير نقطة بالنسبة إلى نقطة أخرى؟",
                    options: ["النقطة نفسها", "نقطة تبعد عنها بنفس المسافة وعلى نفس الاستقامة", "نقطة عشوائية", "لا يوجد نظير"],
                    answer: "نقطة تبعد عنها بنفس المسافة وعلى نفس الاستقامة"
                },
                {
                    question: "نظير قطعة مستقيمة بالنسبة إلى نقطة هو...",
                    options: ["نقطة", "قطعة مستقيمة توازيها وتقايسها", "مستقيم يعامدها", "نصف مستقيم"],
                    answer: "قطعة مستقيمة توازيها وتقايسها"
                },
                {
                    question: "ما هو مركز تناظر الدائرة؟",
                    options: ["نقطة على محيطها", "مركزها", "نقطة خارجها", "ليس لها مركز تناظر"],
                    answer: "مركزها"
                },
                {
                    question: "إذا كانت النقطة O هي منتصف القطعة [AB]، فإن A هي نظيرة B بالنسبة إلى...",
                    options: ["A", "B", "O", "نقطة أخرى"],
                    answer: "O"
                },
                {
                    question: "التناظر المركزي يحافظ على...",
                    options: ["الألوان", "الاتجاه", "أقياس الزوايا والأطوال والمساحات", "لا شيء مما سبق"],
                    answer: "أقياس الزوايا والأطوال والمساحات"
                }
            ]
        },
        "الزوايا والمثلثات والدائرة": {
            exercises: [
                {
                    question: "زاويتان متجاورتان ومتكاملتان، ما هو مجموع قيسهما؟",
                    options: ["90°", "180°", "360°", "45°"],
                    answer: "180°"
                },
                {
                    question: "ماذا نسمي الدائرة التي تمر برؤوس المثلث الثلاثة؟",
                    options: ["الدائرة الداخلية", "الدائرة المحيطة بالمثلث", "دائرة الوحدة", "دائرة عشوائية"],
                    answer: "الدائرة المحيطة بالمثلث"
                },
                {
                    question: "في مثلث متساوي الساقين، زاويتا القاعدة...",
                    options: ["متكاملتان", "متتامتان", "متقايستان", "قائمتان"],
                    answer: "متقايستان"
                },
                {
                    question: "ما هو أطول وتر في الدائرة؟",
                    options: ["نصف القطر", "القطر", "المماس", "القوس"],
                    answer: "القطر"
                },
                {
                    question: "إذا كانت لدينا زاويتان متقابلتان بالرأس، فإنهما...",
                    options: ["متكاملتان", "متجاورتان", "متقايستان", "حادتان"],
                    answer: "متقايستان"
                }
            ]
        },
        "جمع وطرح الأعداد النسبية": {
            exercises: [
                {
                    question: "أحسب المجموع التالي:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">(-5) + (+3) = ?</div>",
                    options: ["8-", "8+", "2-", "2+"],
                    answer: "2-"
                },
                {
                    question: "أحسب الفرق التالي:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">(-7) - (-4) = ?</div>",
                    options: ["11-", "3-", "3+", "11+"],
                    answer: "3-"
                },
                {
                    question: "ما هو ناتج العملية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\"> (+9) + (-9) = ?</div>",
                    options: ["0", "18+", "18-", "1"],
                    answer: "0"
                },
                {
                    question: "أحسب المجموع الجبري التالي:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">A = (-2) + (+5) - (-3) = ?</div>",
                    options: ["0", "6+", "4-", "10+"],
                    answer: "6+",
                    solution: "A = (-2) + (+5) - (-3)<br>الخطوة 1: تحويل الطرح إلى جمع<br>A = (-2) + (+5) + (+3)<br>الخطوة 2: جمع الأعداد الموجبة<br>A = (-2) + 8<br>الخطوة 3: جمع العدد السالب مع الموجب<br>A = 6<br>النتيجة: A = 6+"
                },
                {
                    question: "ما هو معاكس العدد 15؟",
                    options: ["15", "15-", "0", "1/15"],
                    answer: "15-"
                }
            ]
        },
        "حساب المسافة بين نقطتين": {
            exercises: [
                {
                    question: "على مستقيم مدرج، فاصلة النقطة A هي 5+ وفاصلة النقطة B هي 2+. ما هي المسافة AB؟",
                    options: ["3", "7", "3-", "7-"],
                    answer: "3"
                },
                {
                    question: "على مستقيم مدرج، فاصلة النقطة C هي 4- وفاصلة النقطة D هي 1-. ما هي المسافة CD؟",
                    options: ["5", "5-", "3", "3-"],
                    answer: "3"
                },
                {
                    question: "على مستقيم مدرج، فاصلة النقطة E هي 6+ وفاصلة النقطة F هي 8-. ما هي المسافة EF؟",
                    options: ["2", "2-", "14", "14-"],
                    answer: "14"
                },
                {
                    question: "المسافة بين نقطتين على مستقيم مدرج تساوي...",
                    options: ["مجموع فاصلتيهما", "جداء فاصلتيهما", "الفرق بين أكبر فاصلة وأصغر فاصلة", "لا يمكن حسابها"],
                    answer: "الفرق بين أكبر فاصلة وأصغر فاصلة"
                },
                {
                    question: "إذا كانت المسافة بين النقطتين M و N هي 10، وفاصلة M هي 3-، فما هي الفاصلة الممكنة للنقطة N؟",
                    options: ["7+", "13-", "7+ أو 13-", "لا توجد إجابة"],
                    answer: "7+ أو 13-"
                }
            ]
        },
        "حل معادلات بسيطة": {
            exercises: [
                {
                    question: "ما هو حل المعادلة التالية؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">x + 5 = 12</div>",
                    options: ["x = 7", "x = 17", "x = 5", "x = 7-"],
                    answer: "x = 7",
                    solution: "x + 5 = 12<br>الخطوة 1: طرح 5 من الطرفين<br>x + 5 - 5 = 12 - 5<br>الخطوة 2: تبسيط<br>x = 7<br>التحقق: 7 + 5 = 12 ✓"
                },
                {
                    question: "أوجد قيمة y في المعادلة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">y - 3 = 10</div>",
                    options: ["y = 7", "y = 13", "y = 13-", "y = 30"],
                    answer: "y = 13",
                    solution: "y - 3 = 10<br>الخطوة 1: إضافة 3 للطرفين<br>y - 3 + 3 = 10 + 3<br>الخطوة 2: تبسيط<br>y = 13<br>التحقق: 13 - 3 = 10 ✓"
                },
                {
                    question: "حل المعادلة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">4a = 24</div>",
                    options: ["a = 20", "a = 28", "a = 6", "a = 96"],
                    answer: "a = 6",
                    solution: "4a = 24<br>الخطوة 1: قسمة الطرفين على 4<br>4a ÷ 4 = 24 ÷ 4<br>الخطوة 2: تبسيط<br>a = 6<br>التحقق: 4 × 6 = 24 ✓"
                },
                {
                    question: "ما هي قيمة المجهول في المعادلة؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">z / 2 = 8</div>",
                    options: ["z = 4", "z = 10", "z = 16", "z = 6"],
                    answer: "z = 16",
                    solution: "z / 2 = 8<br>الخطوة 1: ضرب الطرفين في 2<br>z / 2 × 2 = 8 × 2<br>الخطوة 2: تبسيط<br>z = 16<br>التحقق: 16 ÷ 2 = 8 ✓"
                },
                {
                    question: "إذا كان <div style=\"display: inline-block; text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2x + 1 = 11</div>، فما هي قيمة x؟",
                    options: ["x = 6", "x = 10", "x = 12", "x = 5"],
                    answer: "x = 5",
                    solution: "2x + 1 = 11<br>الخطوة 1: طرح 1 من الطرفين<br>2x + 1 - 1 = 11 - 1<br>الخطوة 2: تبسيط<br>2x = 10<br>الخطوة 3: قسمة الطرفين على 2<br>2x ÷ 2 = 10 ÷ 2<br>الخطوة 4: تبسيط<br>x = 5<br>التحقق: 2 × 5 + 1 = 11 ✓"
                }
            ]
        },
        "خواص متوازي الأضلاع وأنواعه": {
            exercises: [
                {
                    question: "ما هي الخاصية الأساسية لقطري متوازي الأضلاع؟",
                    options: ["متعامدان", "متقايسان", "متناصفان", "متوازيان"],
                    answer: "متناصفان"
                },
                {
                    question: "المستطيل هو متوازي أضلاع، إحدى زواياه...",
                    options: ["حادة", "منفرجة", "قائمة", "مستقيمة"],
                    answer: "قائمة"
                },
                {
                    question: "المعين هو متوازي أضلاع فيه...",
                    options: ["قطران متقايسان", "ضلعان متتاليان متقايسان", "زاوية قائمة", "كل أضلاعه مختلفة"],
                    answer: "ضلعان متتاليان متقايسان"
                },
                {
                    question: "المربع هو مستطيل و... في نفس الوقت.",
                    options: ["معين", "مثلث", "دائرة", "شبه منحرف"],
                    answer: "معين"
                },
                {
                    question: "في متوازي الأضلاع، كل زاويتين متتاليتين هما...",
                    options: ["متقايستان", "متكاملتان (مجموعهما 180°)", "متتامتان (مجموعهما 90°)", "لا علاقة بينهما"],
                    answer: "متكاملتان (مجموعهما 180°)"
                }
            ]
        },
        "حساب المساحة": {
            exercises: [
                {
                    question: "مستطيل طوله <span dir='ltr'>cm</span> 8 وعرضه <span dir='ltr'>cm</span> 5. ما هي مساحته؟",
                    options: ["<span dir='ltr'>cm²</span> 40", "<span dir='ltr'>cm²</span> 26", "<span dir='ltr'>cm²</span> 13", "<span dir='ltr'>cm²</span> 64"],
                    answer: "<span dir='ltr'>cm²</span> 40"
                },
                {
                    question: "مربع طول ضلعه <span dir='ltr'>cm</span> 6. ما هي مساحته؟",
                    options: ["<span dir='ltr'>cm²</span> 24", "<span dir='ltr'>cm²</span> 36", "<span dir='ltr'>cm²</span> 12", "<span dir='ltr'>cm²</span> 60"],
                    answer: "<span dir='ltr'>cm²</span> 36"
                },
                {
                    question: "مثلث قائم طول قاعدته <span dir='ltr'>cm</span> 10 وارتفاعه <span dir='ltr'>cm</span> 4. ما هي مساحته؟",
                    options: ["<span dir='ltr'>cm²</span> 40", "<span dir='ltr'>cm²</span> 14", "<span dir='ltr'>cm²</span> 20", "<span dir='ltr'>cm²</span> 28"],
                    answer: "<span dir='ltr'>cm²</span> 20"
                },
                {
                    question: "متوازي أضلاع طول قاعدته <span dir='ltr'>cm</span> 7 والارتفاع المتعلق بها <span dir='ltr'>cm</span> 3. ما هي مساحته؟",
                    options: ["<span dir='ltr'>cm²</span> 21", "<span dir='ltr'>cm²</span> 10", "<span dir='ltr'>cm²</span> 20", "<span dir='ltr'>cm²</span> 42"],
                    answer: "<span dir='ltr'>cm²</span> 21"
                },
                {
                    question: "قرص نصف قطره <span dir='ltr'>cm</span> 10. أحسب مساحته (نأخذ π ≈ 3.14).",
                    options: ["<span dir='ltr'>cm²</span> 31.4", "<span dir='ltr'>cm²</span> 62.8", "<span dir='ltr'>cm²</span> 314", "<span dir='ltr'>cm²</span> 100"],
                    answer: "<span dir='ltr'>cm²</span> 314"
                }
            ]
        },
        "الجداول التناسبية": {
            exercises: [
                {
                    question: "نقول عن جدول أنه جدول تناسبية إذا كانت أعداد السطر الأول متناسبة مع أعداد السطر الثاني عن طريق...",
                    options: ["الجمع بنفس العدد", "الضرب في نفس العدد", "القسمة على أعداد مختلفة", "الطرح من نفس العدد"],
                    answer: "الضرب في نفس العدد"
                },
                {
                    question: "في جدول تناسبية، إذا كان 3 يقابله 9، فما هو معامل التناسبية للانتقال من السطر الأول إلى الثاني؟",
                    options: ["6", "3", "12", "27"],
                    answer: "3"
                },
                {
                    question: "أكمل الجدول التناسبي التالي: السطر الأول (2 ، 4)، السطر الثاني (5 ، x). ما هي قيمة x؟",
                    options: ["7", "10", "8", "2.5"],
                    answer: "10"
                },
                {
                    question: "إذا كان سعر 5 أقلام هو 100 دينار، فما هو سعر 7 أقلام حسب نفس النسبة؟",
                    options: ["120 دينار", "140 دينار", "105 دينار", "700 دينار"],
                    answer: "140 دينار"
                },
                {
                    question: "في وضعية تناسبية، نسمي القيمة المجهولة في علاقة مثل a/b = c/x بـ...",
                    options: ["المعامل", "النسبة", "الرابع المتناسب", "المجموع"],
                    answer: "الرابع المتناسب"
                }
            ]
        },
        "النسبة المئوية": {
            exercises: [
                {
                    question: "في قسم به 40 تلميذاً، نجح منهم 30. ما هي النسبة المئوية للناجحين؟",
                    options: ["30%", "40%", "75%", "10%"],
                    answer: "75%"
                },
                {
                    question: "سعر سلعة <span dir='ltr'>DA</span> 500، تم تخفيضها بنسبة 20%. ما هو مبلغ التخفيض؟",
                    options: ["<span dir='ltr'>DA</span> 20", "<span dir='ltr'>DA</span> 50", "<span dir='ltr'>DA</span> 100", "<span dir='ltr'>DA</span> 400"],
                    answer: "<span dir='ltr'>DA</span> 100"
                },
                {
                    question: "كيف نكتب النسبة المئوية 25% على شكل كسر؟",
                    options: ["1/4", "1/25", "25/1", "1/5"],
                    answer: "1/4"
                },
                {
                    question: "أخذ نسبة مئوية p% من عدد x يعني ضرب العدد x في...",
                    options: ["p", "p/100", "100/p", "100*p"],
                    answer: "p/100"
                },
                {
                    question: "زاد سعر منتج من <span dir='ltr'>DA</span> 200 إلى <span dir='ltr'>DA</span> 250. ما هي النسبة المئوية للزيادة؟",
                    options: ["50%", "20%", "25%", "125%"],
                    answer: "25%"
                }
            ]
        },
        "المقياس وتحويل الوحدات": {
            exercises: [
                {
                    question: "على خريطة مقياسها 1/50000، المسافة بين مدينتين هي <span dir='ltr'>cm</span> 4. ما هي المسافة الحقيقية بالكيلومتر؟",
                    options: ["<span dir='ltr'>km</span> 2", "<span dir='ltr'>km</span> 20", "<span dir='ltr'>km</span> 200", "<span dir='ltr'>km</span> 0.2"],
                    answer: "<span dir='ltr'>km</span> 2"
                },
                {
                    question: "لتحويل <span dir='ltr'>km</span> 2.5 إلى <span dir='ltr'>m</span>، نضرب في...",
                    options: ["10", "100", "1000", "0.1"],
                    answer: "1000"
                },
                {
                    question: "المسافة الحقيقية بين نقطتين هي <span dir='ltr'>m</span> 50. تم تمثيلها على تصميم بـ <span dir='ltr'>cm</span> 5. ما هو مقياس هذا التصميم؟",
                    options: ["1/10", "1/100", "1/1000", "1/50"],
                    answer: "1/1000"
                },
                {
                    question: "كم يساوي <span dir='ltr'>g</span> 3500 بالكيلوجرام؟",
                    options: ["<span dir='ltr'>kg</span> 350", "<span dir='ltr'>kg</span> 35", "<span dir='ltr'>kg</span> 3.5", "<span dir='ltr'>kg</span> 0.35"],
                    answer: "<span dir='ltr'>kg</span> 3.5"
                },
                {
                    question: "إذا كان المقياس أكبر من 1، فإنه يمثل...",
                    options: ["تصغيرًا", "تكبيرًا", "مسافة حقيقية", "لا شيء مما سبق"],
                    answer: "تكبيرًا"
                }
            ]
        }
    },
    3: { // السنة الثالثة متوسط
        "العمليات على الأعداد النسبية": {
            exercises: [
                {
                    "question": "أحسب العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">A = (-5) + (+3) × (-2) = ?</div>",
                    "options": ["4+", "11-", "1-", "16+"],
                    "answer": "11-"
                },
                {
                    "question": "أحسب العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">A = (-10) ÷ (-2) - (+7) = ?</div>",
                    "options": ["2-", "12+", "12-", "2+"],
                    "answer": "2-"
                },
                {
                    "question": "أحسب العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">A = (+8) - (-4) + (-5) = ?</div>",
                    "options": ["1-", "7+", "17+", "7-"],
                    "answer": "7+"
                },
                {
                    "question": "إذا كانت <code style='font-family: monospace, monospace; direction: ltr;'>a = -3</code> و <code style='font-family: monospace, monospace; direction: ltr;'>b = +2</code>، فما هي قيمة <code style='font-family: monospace, monospace; direction: ltr;'>a * b - a</code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>9-</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>3-</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>3+</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>9+</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>3-</code>"
                },
                {
                    "question": "ما هو مقلوب العدد <code style='font-family: monospace, monospace; direction: ltr;'>1/5-</code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5+</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>1/5+</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5-</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>0.2-</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>5-</code>"
                }
            ]
        },
        "الأعداد الناطقة": {
            exercises: [
                {
                    "question": "أي من الكسور التالية هو عدد ناطق غير عشري؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>1/2</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>3/4</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>1/3</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5/10</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>1/3</code>"
                },
                {
                    "question": "ما هو ناتج جمع <code style='font-family: monospace, monospace; direction: ltr;'>2/5 + 1/3</code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>3/8</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>11/15</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2/15</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>3/5</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>11/15</code>"
                },
                {
                    "question": "أحسب جداء <code style='font-family: monospace, monospace; direction: ltr;'>(3/4-) * (8/9)</code>.",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2/3-</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>27/32-</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2/3+</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>1/2-</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>2/3-</code>"
                },
                {
                    "question": "قارن بين العددين <code style='font-family: monospace, monospace; direction: ltr;'>2/3-</code> و <code style='font-family: monospace, monospace; direction: ltr;'>3/4-</code>.",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2/3- > 3/4-</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2/3- < 3/4-</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2/3- = 3/4-</code>",
                        "لا يمكن المقارنة"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>2/3- > 3/4-</code>"
                },
                {
                    "question": "ما هو ناتج قسمة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">(5/6) / (2/3) = ?</div>",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5/9</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5/4</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>10/18</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>4/5</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>5/4</code>"
                }
            ]
        },
        "القوى ذات الأسس الصحيحة النسبية": {
            exercises: [
                {
                    "question": "ما هي قيمة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\"><span dir='ltr'>10<sup>-3</sup></span> = ?</div>",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>1000</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>0.001</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>30-</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>0.01</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>0.001</code>"
                },
                {
                    "question": "بسّط العبارة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">5<sup>4</sup> * 5<sup>-2</sup> = ?</div>",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5<sup>-8</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5<sup>6</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5<sup>2</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>25<sup>2</sup></code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>5<sup>2</sup></code>"
                },
                {
                    "question": "ما هي الكتابة العلمية للعدد:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">0.00078 = ?</div>",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>7.8 * 10<sup>4</sup></span></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>7.8 * 10<sup>-4</sup></span></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>78 * 10<sup>-5</sup></span></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>0.78 * 10<sup>-3</sup></span></code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>7.8 * 10<sup>-4</sup></span></code>"
                },
                {
                    "question": "أحسب:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">(2<sup>3</sup>)<sup>2</sup> = ?</div>",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2<sup>5</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2<sup>9</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2<sup>6</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>4<sup>3</sup></code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>2<sup>6</sup></code>"
                },
                {
                    "question": "ما هي رتبة قدر العدد:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\"><span dir='ltr'>5.1 * 10<sup>8</sup></span> = ?</div>",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>5 * 10<sup>8</sup></span></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>10<sup>8</sup></span></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>5 * 10<sup>9</sup></span></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>10<sup>9</sup></span></code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'><span dir='ltr'>5 * 10<sup>8</sup></span></code>"
                }
            ]
        },
        "الحساب الحرفي": {
            exercises: [
                {
                    "question": "انشر وبسّط العبارة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">3(x + 5) - 2x = ?</div>",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x + 15</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5x + 5</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x + 5</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>3x + 15</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>x + 15</code>"
                },
                {
                    "question": "من أجل <code style='font-family: monospace, monospace; direction: ltr;'>a = -2</code>، ما هي قيمة العبارة <code style='font-family: monospace, monospace; direction: ltr;'>5a - a<sup>2</sup></code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-14</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-6</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+6</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+14</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>-14</code>"
                },
                {
                    "question": "حل المعادلة <code style='font-family: monospace, monospace; direction: ltr;'>4x - 7 = 5</code>.",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x = 3</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x = -0.5</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x = 12</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x = 0.5</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>x = 3</code>"
                },
                {
                    "question": "اختبر صحة المساواة من أجل y = 2:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2(y + 3) = 10</div>",
                    "options": [
                        "المساواة صحيحة",
                        "المساواة خاطئة",
                        "لا يمكن الاختبار",
                        "القيمة غير كافية"
                    ],
                    "answer": "المساواة صحيحة"
                },
                {
                    "question": "حل المتراجحة <code style='font-family: monospace, monospace; direction: ltr;'>3x + 1 > 7</code>.",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x < 2</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x > 2</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x > 8/3</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>x < 6</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>x > 2</code>"
                }
            ]
        },
        "مبرهنة فيثاغورس": {
            exercises: [
                {
                    "question": "في مثلث قائم، طولا الضلعين القائمين <span dir='ltr'>cm</span> 6 و <span dir='ltr'>cm</span> 8. ما هو طول الوتر؟",
                    "options": [
                        "<span dir='ltr'>cm</span> 14",
                        "<span dir='ltr'>cm</span> 100",
                        "<span dir='ltr'>cm</span> 10",
                        "<span dir='ltr'>cm</span> 48"
                    ],
                    "answer": "<span dir='ltr'>cm</span> 10"
                },
                {
                    "question": "مثلث ABC قائم في A، حيث <code style='font-family: monospace, monospace; direction: ltr;'>AB = 5</code> و <code style='font-family: monospace, monospace; direction: ltr;'>BC = 13</code>. ما هو طول <code style='font-family: monospace, monospace; direction: ltr;'>AC</code>؟",
                    "options": [
                        "12",
                        "18",
                        "8",
                        "144"
                    ],
                    "answer": "12"
                },
                {
                    "question": "هل المثلث الذي أطوال أضلاعه 5، 12، 13 هو مثلث قائم؟",
                    "options": [
                        "نعم",
                        "لا",
                        "المعطيات ناقصة",
                        "هو مثلث متساوي الساقين"
                    ],
                    "answer": "نعم"
                },
                {
                    "question": "ما هو مربع جيب تمام زاوية حادة في مثلث قائم؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>cos(a)</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>cos<sup>2</sup>(a)</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>sin(a)</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>tan(a)</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>cos<sup>2</sup>(a)</code>"
                },
                {
                    "question": "في مثلث قائم، الوتر هو 15 والضلع القائم هو 9. ما هو طول الضلع القائم الآخر؟",
                    "options": [
                        "12",
                        "6",
                        "24",
                        "10"
                    ],
                    "answer": "12"
                }
            ]
        },
        "المثلثات والدائرة": {
            exercises: [
                {
                    "question": "ما هي الخاصية التي يتميز بها المثلث المحاط بدائرة قطرها أحد أضلاعه؟",
                    "options": [
                        "متساوي الساقين",
                        "متقايس الأضلاع",
                        "قائم",
                        "كيفي"
                    ],
                    "answer": "قائم"
                },
                {
                    "question": "ما هو مركز الدائرة المحيطة بمثلث قائم؟",
                    "options": [
                        "رأس الزاوية القائمة",
                        "نقطة تلاقي المتوسطات",
                        "منتصف الوتر",
                        "نقطة تلاقي المنصفات"
                    ],
                    "answer": "منتصف الوتر"
                },
                {
                    "question": "إذا كان طول متوسط متعلق بأحد أضلاع مثلث يساوي نصف طول هذا الضلع، فإن المثلث...",
                    "options": [
                        "قائم",
                        "متساوي الساقين",
                        "متقايس الأضلاع",
                        "لا يمكن الجزم"
                    ],
                    "answer": "قائم"
                },
                {
                    "question": "ما هو المستقيم الذي يشمل رأساً ويكون عمودياً على حامل الضلع المقابل له في المثلث؟",
                    "options": [
                        "المتوسط",
                        "المنصف",
                        "المحور",
                        "الارتفاع"
                    ],
                    "answer": "الارتفاع"
                },
                {
                    "question": "نقطة تلاقي محاور أضلاع المثلث هي...",
                    "options": [
                        "مركز الدائرة المحيطة بالمثلث",
                        "مركز الدائرة المرسومة داخل المثلث",
                        "مركز ثقل المثلث",
                        "لا تمثل أي شيء"
                    ],
                    "answer": "مركز الدائرة المحيطة بالمثلث"
                }
            ]
        },
        "الانسحاب": {
            exercises: [
                {
                    "question": "ما هي صورة النقطة A بالانسحاب الذي يحول B إلى C؟",
                    "options": [
                        "نقطة D بحيث يكون الرباعي ABDC متوازي أضلاع",
                        "نقطة D بحيث يكون الرباعي ABCD متوازي أضلاع",
                        "نقطة D بحيث يكون الرباعي ACBD متوازي أضلاع",
                        "نقطة B نفسها"
                    ],
                    "answer": "نقطة D بحيث يكون الرباعي ABCD متوازي أضلاع"
                },
                {
                    "question": "صورة مستقيم بانسحاب هو...",
                    "options": [
                        "مستقيم يعامده",
                        "مستقيم يوازيه",
                        "نقطة",
                        "قطعة مستقيمة"
                    ],
                    "answer": "مستقيم يوازيه"
                },
                {
                    "question": "ماذا يحفظ الانسحاب؟",
                    "options": [
                        "الأطوال فقط",
                        "الزوايا فقط",
                        "المساحات فقط",
                        "الأطوال والزوايا والمساحات والاستقامية"
                    ],
                    "answer": "الأطوال والزوايا والمساحات والاستقامية"
                },
                {
                    "question": "ما هي خصائص الانسحاب؟",
                    "options": [
                        "يحافظ على الأطوال والزوايا",
                        "يحافظ على الأطوال فقط",
                        "يحافظ على الزوايا فقط",
                        "لا يحافظ على أي شيء"
                    ],
                    "answer": "يحافظ على الأطوال والزوايا"
                },
                {
                    "question": "صورة دائرة نصف قطرها <span dir='ltr'>cm</span> 5 بانسحاب هي...",
                    "options": [
                        "دائرة نصف قطرها <span dir='ltr'>cm</span> 10",
                        "دائرة نصف قطرها <span dir='ltr'>cm</span> 5",
                        "نقطة",
                        "قطعة مستقيمة طولها <span dir='ltr'>cm</span> 5"
                    ],
                    "answer": "دائرة نصف قطرها <span dir='ltr'>cm</span> 5"
                }
            ]
        },
        "الهرم ومخروط الدوران": {
            exercises: [
                {
                    "question": "ما هو شكل قاعدة الهرم المنتظم الذي له 4 أوجه جانبية؟",
                    "options": ["مربع", "مثلث", "خماسي", "دائرة"],
                    "answer": "مربع"
                },
                {
                    "question": "كيف نحسب حجم الهرم؟",
                    "options": ["(مساحة القاعدة * الارتفاع) / 3", "مساحة القاعدة * الارتفاع", "محيط القاعدة * الارتفاع"],
                    "answer": "(مساحة القاعدة * الارتفاع) / 3"
                },
                {
                    "question": "ما هو المجسم الذي ينتج عن دوران مثلث قائم حول أحد ضلعيه القائمين؟",
                    "options": ["مخروط الدوران", "أسطوانة", "هرم", "كرة"],
                    "answer": "مخروط الدوران"
                },
                {
                    "question": "هرم قاعدته مربع طول ضلعه <span dir='ltr'>cm</span> 3 وارتفاعه <span dir='ltr'>cm</span> 10. ما هو حجمه؟",
                    "options": ["<span dir='ltr'>cm³</span> 30", "<span dir='ltr'>cm³</span> 90", "<span dir='ltr'>cm³</span> 15", "<span dir='ltr'>cm³</span> 45"],
                    "answer": "<span dir='ltr'>cm³</span> 30"
                },
                {
                    "question": "مخروط دوران نصف قطر قاعدته <span dir='ltr'>cm</span> 5 وارتفاعه <span dir='ltr'>cm</span> 12. ما هو طول مولده؟ (استخدم خاصية فيتاغورس)",
                    "options": ["<span dir='ltr'>cm</span> 13", "<span dir='ltr'>cm</span> 17", "<span dir='ltr'>cm</span> 7", "<span dir='ltr'>cm</span> 10"],
                    "answer": "<span dir='ltr'>cm</span> 13"
                }
            ]
        },
        "نظرية فيثاغورس": {
            exercises: [
                {
                    "question": "في مثلث قائم، إذا كان طول الوتر <span dir='ltr'>cm</span> 10 وأحد الضلعين القائمين <span dir='ltr'>cm</span> 6، فما طول الضلع القائم الآخر؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">a² + 6² = 10²</div>",
                    "options": ["<span dir='ltr'>cm</span> 8", "<span dir='ltr'>cm</span> 7", "<span dir='ltr'>cm</span> 9", "<span dir='ltr'>cm</span> 4"],
                    "answer": "<span dir='ltr'>cm</span> 8"
                },
                {
                    "question": "مثلث أطوال أضلاعه <span dir='ltr'>cm</span> 5, <span dir='ltr'>cm</span> 12, <span dir='ltr'>cm</span> 13. هل هو مثلث قائم؟",
                    "options": ["نعم", "لا", "لا يمكن التحديد"],
                    "answer": "نعم"
                },
                {
                    "question": "في مثلث ABC قائم في A، إذا كان AB = <span dir='ltr'>cm</span> 3 و AC = <span dir='ltr'>cm</span> 4، فما هو طول الوتر BC؟",
                    "options": ["<span dir='ltr'>cm</span> 5", "<span dir='ltr'>cm</span> 6", "<span dir='ltr'>cm</span> 7", "<span dir='ltr'>cm</span> 25"],
                    "answer": "<span dir='ltr'>cm</span> 5"
                },
                {
                    "question": "ما هي الخاصية العكسية لخاصية فيتاغورس؟",
                    "options": ["تستخدم لإثبات أن مثلثًا قائم", "تستخدم لحساب طول ضلع", "تستخدم لحساب مساحة"],
                    "answer": "تستخدم لإثبات أن مثلثًا قائم"
                },
                {
                    "question": "إذا كان مربع طول الوتر في مثلث يساوي مجموع مربعي طولي الضلعين الآخرين، فإن المثلث...",
                    "options": ["قائم", "متساوي الساقين", "متقايس الأضلاع", "كيفي"],
                    "answer": "قائم"
                }
            ]
        },
        "الحساب المثلثي في مثلث قائم": {
            exercises: [
                {
                    "question": "ماذا يمثل جيب تمام (Cosinus) زاوية حادة في مثلث قائم؟",
                    "options": ["طول الضلع المجاور / طول الوتر", "طول الضلع المقابل / طول الوتر", "طول الضلع المقابل / طول الضلع المجاور"],
                    "answer": "طول الضلع المجاور / طول الوتر"
                },
                {
                    "question": "في مثلث ABC قائم في A، ما هو cos(B)؟<br><span dir='ltr'>AB = 4 cm، BC = 5 cm</span>",
                    "options": ["0,8", "0,6", "1,25", "0,75"],
                    "answer": "0,8"
                },
                {
                    "question": "قيمة جيب تمام زاوية حادة تكون دائمًا...",
                    "options": ["محصورة بين 0 و 1", "أكبر من 1", "تساوي 1", "سالبة"],
                    "answer": "محصورة بين 0 و 1"
                },
                {
                    "question": "إذا كان cos(x) = 0,5، فما هو قيس الزاوية x بالدرجات؟",
                    "options": ["60°", "30°", "45°", "90°"],
                    "answer": "60°"
                },
                {
                    "question": "باستخدام الآلة الحاسبة، أوجد القيمة المقربة إلى 0.01 لـ cos(35°).",
                    "options": ["0,82", "0,57", "0,91", "0,70"],
                    "answer": "0,82"
                }
            ]
        },
        "تبسيط ونشر العبارات الجبرية": {
            exercises: [
                {
                    question: "أنشر وبسط العبارة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">3(2x - 1) + 5x</div>",
                    options: ["11x - 3", "x - 3", "11x + 1", "6x - 3"],
                    answer: "11x - 3"
                },
                {
                    question: "ما هو تبسيط العبارة: 7a - (2a + 4)؟",
                    options: ["5a - 4", "5a + 4", "9a + 4", "9a - 4"],
                    answer: "5a - 4"
                },
                {
                    question: "انشر العبارة: (x + 2)(x + 3)",
                    options: ["x² + 5x + 6", "x² + 6", "2x + 5", "x² + 2x + 6"],
                    answer: "x² + 5x + 6"
                },
                {
                    question: "بسط العبارة: 5y² - 3y + 1 - 2y² + y",
                    options: ["3y² - 2y + 1", "3y² + 2y + 1", "7y² - 4y + 1", "3y - 1"],
                    answer: "3y² - 2y + 1"
                },
                {
                    question: "ناتج نشر (a - b)(a + b) هو:",
                    options: ["a² - b²", "a² + b²", "a² - 2ab + b²", "a² + 2ab + b²"],
                    answer: "a² - b²"
                }
            ]
        },
        "المساويات والمتباينات": {
            exercises: [
                {
                    question: "إذا كان x > 3، فأي من التالي صحيح؟",
                    options: ["x + 2 > 5", "x - 1 < 2", "2x < 6", "<div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">-x > -3</div>"],
                    answer: "x + 2 > 5"
                },
                {
                    question: "إذا كان a < b، فإن<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">-2a ... -2b</div>",
                    options: [">", "<", "=", "≥"],
                    answer: "<"
                },
                {
                    question: "إذا كان 7 > 5، فأي من التالي صحيح؟",
                    options: ["7 + 2 > 5 + 2", "7 - 3 < 5 - 3", "7 × 0 > 5 × 0", "7 ÷ 2 < 5 ÷ 2"],
                    answer: "7 + 2 > 5 + 2"
                },
                {
                    question: "إذا كان a > b و b > c، فإن...",
                    options: ["a > c", "a < c", "a = c", "لا يمكن تحديد العلاقة"],
                    answer: "a > c"
                },
                {
                    question: "عند ضرب طرفي متباينة في عدد سالب، فإننا...",
                    options: ["نعكس اتجاه المتباينة", "لا نغير اتجاه المتباينة", "نضيف العدد لطرفي المتباينة", "نحذف المتباينة"],
                    answer: "نعكس اتجاه المتباينة"
                }
            ]
        },
        "معادلات من الدرجة الأولى بمجهول واحد": {
            exercises: [
                {
                    question: "ما هو حل المعادلة 3x - 5 = 10؟",
                    options: ["x = 5", "x = 5-", "x = 15", "x = 3/5"],
                    answer: "x = 5"
                },
                {
                    question: "أوجد قيمة y في المعادلة: y/4 + 1 = 3",
                    options: ["y = 8", "y = 16", "y = 4", "y = 2"],
                    answer: "y = 8"
                },
                {
                    question: "حل المعادلة <div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2(a + 3) = 14</div> هو:",
                    options: ["a = 4", "a = 5", "a = 8", "a = 11"],
                    answer: "a = 4"
                },
                {
                    question: "حل المعادلة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">7-2z=1</div>فما هي قيمة z؟",
                    options: ["z = 3", "z = 3-", "z = 4", "z = 4-"],
                    answer: "z = 3"
                },
                {
                    question: "المعادلة <div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">5x = 2x + 9</div> تكافئ...",
                    options: ["3x = 9", "7x = 9", "3x = -9", "-3x = 9"],
                    answer: "3x = 9"
                }
            ]
        },
    },
    4: { // السنة الرابعة متوسط
        "القواسم والمضاعفات": {
            exercises: [
                {
                    "question": "أي من الأعداد التالية هو من قواسم العدد 24؟",
                    "options": ["5", "7", "8", "10"],
                    answer: "8"
                },
                {
                    "question": "ما هو أصغر مضاعف مشترك غير معدوم للعددين 4 و 6؟",
                    options: ["2", "12", "24", "10"],
                    answer: "12"
                },
                {
                    "question": "العدد 17 هو عدد...",
                    "options": ["زوجي", "أولي", "مركب", "مضاعف لـ 3"],
                    answer: "أولي"
                },
                {
                    "question": "مجموعة قواسم العدد 12 هي:",
                    options: ["{1, 2, 3, 4, 6, 12}", "{1, 2, 3, 4, 8, 12}", "{1, 2, 4, 6, 12}", "{0, 1, 2, 3, 4, 6, 12}"],
                    answer: "{1, 2, 3, 4, 6, 12}"
                },
                {
                    "question": "أي من الأعداد التالية ليس من مضاعفات العدد 7؟",
                    options: ["14", "21", "27", "49"],
                    answer: "27"
                }
            ]
        },
        "القاسم المشترك الأكبر": {
            exercises: [
                {
                    "question": "ما هو القاسم المشترك الأكبر (PGCD) للعددين 18 و 24؟",
                    options: ["3", "4", "6", "9"],
                    answer: "6"
                },
                {
                    "question": "نقول عن عددين أنهما أوليان فيما بينهما إذا كان قاسمهما المشترك الأكبر يساوي...",
                    "options": ["0", "1", "2", "مجموعهما"],
                    answer: "1"
                },
                {
                    "question": "? = PGCD(15, 7)",
                    options: ["1", "7", "15", "105"],
                    answer: "1"
                },
                {
                    "question": "أي زوج من الأعداد التالية أولي فيما بينه؟",
                    options: ["(12, 15)", "(8, 9)", "(10, 20)", "(7, 21)"],
                    answer: "(8, 9)"
                },
                {
                    "question": "إذا كان a من قواسم b، فإن ? = PGCD(a, b)",
                    options: ["a", "b", "a*b", "1"],
                    answer: "a"
                }
            ]
        },
        "خوارزميات القسمة": {
            exercises: [
                {
                    "question": "لإيجاد PGCD(48, 18) باستخدام خوارزمية الطرح المتتالية، أول عملية هي:",
                    options: ["48 + 18", "48 * 18", "48 / 18", "48 - 18"],
                    answer: "48 - 18"
                },
                {
                    "question": "في خوارزمية إقليدس، القاسم المشترك الأكبر هو...",
                    "options": ["أول باقٍ غير معدوم", "آخر باقٍ غير معدوم", "أول حاصل قسمة", "آخر حاصل قسمة"],
                    answer: "آخر باقٍ غير معدوم"
                },
                {
                    "question": "باستخدام خوارزمية إقليدس، ما هو PGCD(105, 30)؟",
                    options: ["5", "10", "15", "30"],
                    answer: "15"
                },
                {
                    "question": "باقي القسمة الإقليدية للعدد 30 على 7 هو:",
                    options: ["4", "3", "2", "1"],
                    answer: "2"
                },
                {
                    "question": "أي خوارزمية تعتبر أسرع بشكل عام لإيجاد الـ PGCD؟",
                    options: ["خوارزمية الطرح المتتالية", "خوارزمية إقليدس (القسمات المتتالية)", "كلاهما بنفس السرعة", "لا توجد طريقة سريعة"],
                    answer: "خوارزمية إقليدس (القسمات المتتالية)"
                }
            ]
        },
        "اختزال الكسور": {
            exercises: [
                {
                    "question": "لاختزال كسر، نقسم بسطه ومقامه على...",
                    "options": ["أي عدد", "1", "القاسم المشترك الأكبر لهما", "المضاعف المشترك الأصغر لهما"],
                    answer: "القاسم المشترك الأكبر لهما"
                },
                {
                    "question": "ما هو الشكل غير القابل للاختزال للكسر 18/24؟",
                    options: ["9/12", "6/8", "3/4", "2/3"],
                    answer: "3/4"
                },
                {
                    "question": "الكسر 7/15 هو كسر غير قابل للاختزال لأن...",
                    "options": ["بسطه أصغر من مقامه", "7 و 15 أوليان فيما بينهما", "15 عدد فردي", "7 عدد أولي"],
                    answer: "7 و 15 أوليان فيما بينهما"
                },
                {
                    "question": "اختزل الكسر 45/60.",
                    options: ["9/12", "3/4", "15/20", "5/6"],
                    answer: "3/4"
                },
                {
                    "question": "عندما يكون الكسر غير قابل للاختزال، فإن PGCD لبسطه ومقامه هو:",
                    options: ["0", "1", "قيمة البسط", "قيمة المقام"],
                    answer: "1"
                }
            ]
        },
        "قواعد الحساب على الجذور": {
            exercises: [
                {
                    "question": "ما هو تبسيط 18&radic;؟",
                    options: ["<span dir=\"ltr\">2√3</span>", "<span dir=\"ltr\">3√2</span>", "<span dir=\"ltr\">9√2</span>", "<span dir=\"ltr\">6√3</span>"],
                    answer: "<span dir=\"ltr\">3√2</span>"
                },
                {
                    "question": "ناتج 5&radic; * 20&radic; هو:",
                    options: ["25&radic;", "100&radic;", "25", "100"],
                    answer: "100&radic;"
                },
                {
                    "question": "بسط العبارة<br><span dir=\"ltr\">√75 - √27</span>.",
                    options: ["<span dir=\"ltr\">√48</span>", "<span dir=\"ltr\">2√3</span>", "<span dir=\"ltr\">√12</span>", "<span dir=\"ltr\">3√2</span>"],
                    answer: "<span dir=\"ltr\">2√3</span>"
                },
                {
                    "question": "لكتابة الكسر التالي على شكل كسر مقامه عدد ناطق:<br><span dir=\"ltr\">a/√3</span><br>نضرب البسط والمقام في",
                    "options": ["<span dir=\"ltr\">√3</span>", "<span dir=\"ltr\">3</span>", "<span dir=\"ltr\">3√3</span>", "<span dir=\"ltr\">1/√3</span>"],
                    answer: "<span dir=\"ltr\">√3</span>"
                },
                {
                    "question": "ما هي قيمة<br><span dir=\"ltr\">(√7)²</span>؟",
                    options: ["49", "14", "7", "<span dir=\"ltr\">√14</span>"],
                    answer: "7"
                }
            ]
        },
        "خاصية طالس والعكسية": {
            exercises: [
                {
                    "question": "شرط تطبيق خاصية طالس هو وجود مستقيمين متوازيين يقطعهما...",
                    "options": ["مستقيمان متعامدان", "قاطعان غير متوازيين", "مستقيم واحد", "دائرة"],
                    answer: "قاطعان غير متوازيين"
                },
                {
                    "question": "في مثلث ABC، النقطة M تنتمي إلى [AB] و N تنتمي إلى [AC]. إذا كان (MN) يوازي (BC)، فإن...",
                    "options": ["AM/AB = AN/AC = MN/BC", "AM/MB = AN/NC", "AB/AM = AC/AN = BC/MN", "الخياران الأول والثالث صحيحان"],
                    answer: "الخياران الأول والثالث صحيحان"
                },
                {
                    "question": "تُستخدم خاصية طالس العكسية لـ...",
                    "options": ["حساب طول ضلع", "إثبات توازي مستقيمين", "إثبات تعامد مستقيمين", "حساب مساحة مثلث"],
                    answer: "إثبات توازي مستقيمين"
                },
                {
                    "question": "إذا كانت AM/AB = AN/AC والنقط A,M,B و A,N,C بنفس الترتيب، فإن...",
                    "options": ["(MN) يوازي (BC)", "(MC) يوازي (BN)", "(AN) يوازي (BM)", "المثلث ABC قائم"],
                    answer: "(MN) يوازي (BC)"
                },
                {
                    "question": "في الشكل الفراشة (مستقيمان متقاطعان يقطعهما متوازيان)، هل تنطبق خاصية طالس؟",
                    "options": ["نعم", "لا", "فقط إذا كانت الزاوية قائمة", "فقط في المثلثات"],
                    answer: "نعم"
                }
            ]
        },
        "النسب المثلثية (جيب، جيب تمام، ظل)": {
            exercises: [
                {
                    "question": "جيب الزاوية (sin) في مثلث قائم يساوي...",
                    "options": ["المجاور/الوتر", "المقابل/الوتر", "المقابل/المجاور", "الوتر/المقابل"],
                    answer: "المقابل/الوتر"
                },
                {
                    "question": "ظل الزاوية (tan) في مثلث قائم يساوي...",
                    "options": ["sin/cos", "cos/sin", "المجاور/الوتر", "الوتر/المقابل"],
                    answer: "sin/cos"
                },
                {
                    "question": "العلاقة الأساسية بين sin و cos لنفس الزاوية x هي:",
                    options: ["sin(x) + cos(x) = 1", "sin²(x) + cos²(x) = 1", "sin(x) * cos(x) = 1", "sin(x) / cos(x) = 1"],
                    answer: "sin²(x) + cos²(x) = 1"
                },
                {
                    "question": "إذا كان sin(a) = 0.6، فما هي قيمة cos(a)؟ (علماً أن a زاوية حادة)",
                    "options": ["0.4", "0.8", "0.64", "0.36"],
                    answer: "0.8"
                },
                {
                    "question": "في مثلث ABC قائم في A، حيث AB=3 و AC=4. ما هي قيمة tan(B)؟",
                    options: ["3/4", "4/3", "3/5", "4/5"],
                    answer: "4/3"
                }
            ]
        },
        "المتطابقات الشهيرة": {
            exercises: [
                {
                    "question": "أنشر العبارة التالية باستعمال المتطابقات الشهيرة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">(x + 3)² = ?</div>",
                    "options": ["x² + 6x + 9", "x² + 9", "x² + 3x + 9", "x + 6x + 9"],
                    answer: "x² + 6x + 9"
                },
                {
                    "question": "أنشر العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">(2a - 1)² = ?</div>",
                    options: ["4a² - 4a + 1", "4a² - 1", "2a² - 4a + 1", "4a² + 4a + 1"],
                    answer: "4a² - 4a + 1"
                },
                {
                    "question": "أنشر العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">(y - 5)(y + 5) = ?</div>",
                    options: ["y² - 25", "y² + 25", "y² - 10", "y² - 10y + 25"],
                    answer: "y² - 25"
                },
                {
                    "question": "حلل العبارة التالية إلى جداء عاملين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">x² - 49 = ?</div>",
                    options: ["(x - 7)(x + 7)", "<span dir=\"ltr\">(x - 7)²</span>", "<span dir=\"ltr\">(x + 7)²</span>", "(x - 49)(x + 49)"],
                    answer: "(x - 7)(x + 7)"
                },
                {
                    "question": "حلل العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">9z² + 12z + 4 = ?</div>",
                    options: ["<span dir=\"ltr\">(3z + 2)²</span>", "<span dir=\"ltr\">(3z - 2)²</span>", "<span dir=\"ltr\">(9z + 2)²</span>", "<span dir=\"ltr\">(3z + 4)²</span>"],
                    answer: "<span dir=\"ltr\">(3z + 2)²</span>"
                }
            ]
        },
        "التحليل إلى عوامل": {
            exercises: [
                {
                    "question": "ما هو العامل المشترك في العبارة 3x + 6xy؟",
                    options: ["3", "x", "3x", "6"],
                    answer: "3x"
                },
                {
                    "question": "تحليل العبارة 5a - 10b هو:",
                    options: ["5(a - 2b)", "5(a - 10b)", "10(a - b)", "a(5 - 10b)"],
                    answer: "5(a - 2b)"
                },
                {
                    "question": "حلل العبارة<br><span dir=\"ltr\">(x+1)² - (x+1)(2x-3)</span>؟",
                    options: ["<span dir=\"ltr\">(x+1)(-x+4)</span>", "<span dir=\"ltr\">(x+1)(3x-2)</span>", "<span dir=\"ltr\">-x+4</span>", "<span dir=\"ltr\">(x+1)(x-4)</span>"],
                    answer: "<span dir=\"ltr\">(x+1)(-x+4)</span>"
                },
                {
                    "question": "استخدم المتطابقات الشهيرة لتحليل x² - 16.",
                    options: ["(x-4)(x+4)", "<span dir=\"ltr\">(x-4)²</span>", "<span dir=\"ltr\">(x+4)²</span>", "(x-16)(x+16)"],
                    answer: "(x-4)(x+4)"
                },
                {
                    "question": "تحليل العبارة 4y² + 12y + 9 هو:",
                    options: ["<span dir=\"ltr\">(2y+3)²</span>", "<span dir=\"ltr\">(2y-3)²</span>", "<span dir=\"ltr\">(4y+3)(y+3)</span>", "<span dir=\"ltr\">(2y+9)(2y+1)</span>"],
                    answer: "<span dir=\"ltr\">(2y+3)²</span>",
                    solution: "4y² + 12y + 9 = (2y)² + 2(2y)(3) + 3² = <span dir=\"ltr\">(2y+3)²</span>"
                }
            ]
        },
        "المعادلات من الدرجة الثانية البسيطة": {
            exercises: [
                {
                    "question": "ما هي حلول المعادلة x² = 49؟",
                    options: ["7", "7-", "7 و 7-", "لا توجد حلول"],
                    answer: "7 و 7-"
                },
                {
                    "question": "حلول المعادلة y² = -9 هي:",
                    "options": ["3", "3-", "3 و 3-", "لا توجد حلول حقيقية"],
                    answer: "لا توجد حلول حقيقية"
                },
                {
                    "question": "حل المعادلة<br><span dir=\"ltr\">(x-1)(x+5) = 0</span><br>هو:",
                    "options": ["<span dir=\"ltr\">x=1 أو x=-5</span>", "<span dir=\"ltr\">x=-1 أو x=5</span>", "<span dir=\"ltr\">x=1 فقط</span>", "<span dir=\"ltr\">x=-5 فقط</span>"],
                    answer: "<span dir=\"ltr\">x=1 أو x=-5</span>"
                },
                {
                    "question": "ما هي حلول المعادلة<br><span dir=\"ltr\">(2x - 4)(x + 3) = 0</span>؟",
                    "options": ["<span dir=\"ltr\">x=2 أو x=-3</span>", "<span dir=\"ltr\">x=-2 أو x=3</span>", "<span dir=\"ltr\">x=4 أو x=-3</span>", "<span dir=\"ltr\">x=2 فقط</span>"],
                    "answer": "<span dir=\"ltr\">x=2 أو x=-3</span>"
                },
                {
                    "question": "لحل المعادلة x² - 9 = 0، يمكن تحليلها إلى...",
                    "options": ["<span dir=\"ltr\">(x-3)(x+3)=0</span>", "<span dir=\"ltr\">(x-9)(x+9)=0</span>", "x(x-9)=0", "لا يمكن تحليلها"],
                    "answer": "<span dir=\"ltr\">(x-3)(x+3)=0</span>"
                }
            ]
        },
        "متراجحات من الدرجة الأولى بمجهول واحد": {
            exercises: [
                {
                    "question": "ما هو حل المتراجحة 3x - 1 > 8؟",
                    "options": ["x > 3", "x < 3", "x > 9", "x < 9"],
                    answer: "x > 3"
                },
                {
                    "question": "حل المتراجحة<br><span dir=\"ltr\">4 - 2y ≤ 10</span><br>هو:",
                    "options": ["<span dir=\"ltr\">y ≥ -3</span>", "<span dir=\"ltr\">y ≤ -3</span>", "<span dir=\"ltr\">y ≥ 3U</span>", "<span dir=\"ltr\">y ≤ 3</span>"],
                    answer: "<span dir=\"ltr\">y ≥ -3</span>"
                },
                {
                    "question": "عند ضرب أو قسمة طرفي متباينة على عدد سالب، فإننا...",
                    "options": ["نعكس اتجاه المتباينة", "لا نغير شيئًا", "نضيف ذلك العدد", "نطرح ذلك العدد"],
                    answer: "نعكس اتجاه المتباينة"
                },
                {
                    "question": "التمثيل البياني لحلول المتراجحة x < 2 هو نصف مستقيم...",
                    "options": ["مفتوح من جهة 2", "مغلق من جهة 2", "يبدأ من 0", "لا يمكن تمثيله"],
                    answer: "مفتوح من جهة 2"
                },
                {
                    "question": "أي من الأعداد التالية هو حل للمتراجحة 5x + 3 ≥ 18؟",
                    options: ["0", "1", "2", "3"],
                    answer: "3"
                }
            ]
        },
        "الانسحاب والإحداثيات": {
            exercises: [
                {
                    "question": "ما هي صورة النقطة A(2, 3) بالانسحاب الذي شعاعه u(1, -2)؟",
                    "options": ["B(3, 1)", "B(1, 5)", "B(3, 5)", "B(1, 1)"],
                    answer: "B(3, 1)"
                },
                {
                    "question": "إذا كانت B هي صورة A بالانسحاب الذي شعاعه u، فإن الشعاع AB يساوي...",
                    "options": ["u", "u-", "2u", "الشعاع المعدوم"],
                    answer: "u"
                },
                {
                    "question": "مركبات الشعاع AB حيث A(x_A, y_A) و B(x_B, y_B) هي:",
                    "options": ["(x_B - x_A, y_B - y_A)", "(x_A - x_B, y_A - y_B)", "(x_A + x_B, y_A + y_B)", "(x_B / x_A, y_B / y_A)"],
                    answer: "(x_B - x_A, y_B - y_A)"
                },
                {
                    "question": "صورة مستقيم بانسحاب هو مستقيم...",
                    "options": ["يوازيه", "يعامده", "يقطعه", "منطبق عليه"],
                    answer: "يوازيه"
                },
                {
                    "question": "ما هي إحداثيات منتصف القطعة [AB] حيث A(1, 5) و B(3, -1)؟",
                    "options": ["(4, 4)", "(2, 2)", "(2, 4)", "(4, 2)"],
                    answer: "(2, 2)"
                }
            ]
        },
        "جملة معادلتين من الدرجة الأولى بمجهولين": {
            exercises: [
                {
                    "question": "أي من الثنائيات التالية هو حل لجملة المعادلتين: x+y=5 و x-y=1؟",
                    "options": ["<span dir=\"ltr\">(2, 3)</span>", "<span dir=\"ltr\">(3, 2)</span>", "<span dir=\"ltr\">(4, 1)</span>", "<span dir=\"ltr\">(1, 4)</span>"],
                    answer: "<span dir=\"ltr\">(3, 2)</span>"
                },
                {
                    "question": "طريقة حل جملة معادلتين بتعويض قيمة أحد المجهولين من معادلة في الأخرى تسمى طريقة...",
                    "options": ["الجمع", "التعويض", "الحذف", "التمثيل البياني"],
                    answer: "التعويض"
                },
                {
                    "question": "لحل جملة معادلتين بطريقة الجمع، يجب أن يكون معاملا أحد المجهولين...",
                    "options": ["متساويين", "متعاكسين", "موجبين", "سالبين"],
                    answer: "متعاكسين"
                },
                {
                    "question": "الحل البياني لجملة معادلتين هو نقطة...",
                    "options": ["تقاطع المستقيمين الممثلين للمعادلتين", "بداية أحد المستقيمين", "نهاية أحد المستقيمين", "لا يوجد حل بياني"],
                    answer: "تقاطع المستقيمين الممثلين للمعادلتين"
                },
                {
                    "question": "حل الجملة التالية: 2x+y=7 و 3x-y=3",
                    "options": ["x=2, y=3", "x=3, y=1", "x=1, y=5", "x=0, y=7"],
                    answer: "x=2, y=3"
                }
            ]
        },
        "الدالة الخطية والتآلفية": {
            exercises: [
                {
                    "question": "الدالة f(x) = 3x هي دالة...",
                    "options": ["خطية", "تآلفية", "ثابتة", "تربيعية"],
                    answer: "خطية"
                },
                {
                    "question": "التمثيل البياني لدالة خطية هو مستقيم...",
                    "options": ["يمر من المبدأ", "لا يمر من المبدأ", "يوازي محور الفواصل", "يوازي محور التراتيب"],
                    answer: "يمر من المبدأ"
                },
                {
                    "question": "في الدالة التآلفية g(x) = ax + b، يسمى a بـ...",
                    "options": ["معامل التوجيه", "الترتيب إلى المبدأ", "صورة x", "سابقة x"],
                    answer: "معامل التوجيه"
                },
                {
                    "question": "إذا كانت f دالة خطية حيث f(2) = 6، فما هي عبارة الدالة f؟",
                    "options": ["f(x) = 6x", "f(x) = 2x", "f(x) = 3x", "f(x) = x+4"],
                    answer: "f(x) = 3x"
                },
                {
                    "question": "صورة العدد 1 بالدالة g(x) = -2x + 5 هي:",
                    "options": ["2-", "5", "3", "7"],
                    answer: "3"
                }
            ]
        },
        "الزوايا والمضلعات المنتظمة والدوران": {
            exercises: [
                {
                    "question": "ما هو قياس الزاوية الداخلية لمضلع منتظم له 6 أضلاع؟",
                    "options": ["<span dir=\"ltr\">120°</span>", "<span dir=\"ltr\">90°</span>", "<span dir=\"ltr\">60°</span>", "<span dir=\"ltr\">180°</span>"],
                    "answer": "<span dir=\"ltr\">120°</span>",
                    "solution": "الزاوية الداخلية = <span dir=\"ltr\">(n-2) × 180° / n = (6-2) × 180° / 6 = 4 × 180° / 6 = 120°</span>"
                },
                {
                    "question": "كم عدد الأقطار في مضلع منتظم له 8 أضلاع؟",
                    "options": ["<span dir=\"ltr\">20</span>", "<span dir=\"ltr\">16</span>", "<span dir=\"ltr\">24</span>", "<span dir=\"ltr\">28</span>"],
                    "answer": "<span dir=\"ltr\">20</span>",
                    "solution": "عدد الأقطار = n(n-3)/2 = 8(8-3)/2 = 8×5/2 = 40/2 = <span dir=\"ltr\">20</span>"
                },
                {
                    "question": "ما هو قياس الزاوية المركزية لمضلع منتظم له 5 أضلاع؟",
                    "options": ["<span dir=\"ltr\">72°</span>", "<span dir=\"ltr\">60°</span>", "<span dir=\"ltr\">90°</span>", "<span dir=\"ltr\">108°</span>"],
                    "answer": "<span dir=\"ltr\">72°</span>",
                    "solution": "الزاوية المركزية = <span dir=\"ltr\">360° / n = 360° / 5 = 72°</span>"
                },
                {
                    "question": "إذا كان قياس الزاوية الداخلية لمضلع منتظم <span dir=\"ltr\">135°</span>، فكم عدد أضلاعه؟",
                    "options": ["<span dir=\"ltr\">8</span>", "<span dir=\"ltr\">6</span>", "<span dir=\"ltr\">10</span>", "<span dir=\"ltr\">12</span>"],
                    "answer": "<span dir=\"ltr\">8</span>",
                    "solution": "<span dir=\"ltr\">135° = (n-2) × 180° / n → 135n = 180n - 360 → 45n = 360 → n = 8</span>"
                },
                {
                    "question": "ما هو مجموع قياسات الزوايا الداخلية لمضلع منتظم له 7 أضلاع؟",
                    "options": ["<span dir=\"ltr\">900°</span>", "<span dir=\"ltr\">720°</span>", "<span dir=\"ltr\">1080°</span>", "<span dir=\"ltr\">1260°</span>"],
                    "answer": "<span dir=\"ltr\">900°</span>",
                    "solution": "مجموع الزوايا الداخلية = (n-2) × 180° = (7-2) × 180° = 5 × 180° = <span dir=\"ltr\">900°</span>"
                },
                {
                    "question": "في دائرة، إذا كان قياس الزاوية المركزية <span dir=\"ltr\">60°</span>، فما هو قياس الزاوية المحيطية المقابلة لنفس القوس؟",
                    "options": ["<span dir=\"ltr\">30°</span>", "<span dir=\"ltr\">60°</span>", "<span dir=\"ltr\">120°</span>", "<span dir=\"ltr\">90°</span>"],
                    "answer": "<span dir=\"ltr\">30°</span>"
                },
                {
                    "question": "ما هي العلاقة بين الزاوية المركزية والزاوية المحيطية في دائرة؟",
                    "options": ["الزاوية المركزية تساوي ضعف الزاوية المحيطية", "الزاوية المحيطية تساوي ضعف الزاوية المركزية", "الزاويتان متساويتان", "لا توجد علاقة بينهما"],
                    "answer": "الزاوية المركزية تساوي ضعف الزاوية المحيطية"
                }
            ]
        },
        "الهندسة الفضائية": {
            exercises: [
                {
                    "question": "ما هو حجم مكعب طول حرفه <span dir=\"ltr\">3 cm</span>؟",
                    "options": ["<span dir=\"ltr\">9 cm³</span>", "<span dir=\"ltr\">18 cm³</span>", "<span dir=\"ltr\">27 cm³</span>", "<span dir=\"ltr\">12 cm³</span>"],
                    answer: "<span dir=\"ltr\">27 cm³</span>"
                },
                {
                    "question": "المساحة الجانبية لأسطوانة دوران نصف قطر قاعدتها r وارتفاعها h هي:",
                    "options": ["2πrh", "πr²h", "2πr²", "πr²"],
                    answer: "2πrh"
                },
                {
                    "question": "حجم هرم يساوي...",
                    "options": ["(مساحة القاعدة × الارتفاع) / 3", "مساحة القاعدة × الارتفاع", "(مساحة القاعدة × الارتفاع) / 2", "محيط القاعدة × الارتفاع"],
                    answer: "(مساحة القاعدة × الارتفاع) / 3"
                },
                {
                    "question": "كرة نصف قطرها R، حجمها هو:",
                    "options": ["4πR²", "<span dir=\"ltr\">(4/3)πR³</span>", "πR³", "2πR"],
                    answer: "<span dir=\"ltr\">(4/3)πR³</span>"
                },
                {
                    "question": "مقطع كرة بمستو هو دائمًا...",
                    "options": ["دائرة", "مثلث", "مربع", "نقطة"],
                    answer: "دائرة"
                }
            ]
        },
    }
}
