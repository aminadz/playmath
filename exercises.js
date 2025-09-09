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
                    question: "اشترى أحمد كتابًا بسعر 250 DA ومحفظة بسعر 150 DA. ما هو المبلغ الإجمالي الذي دفعه أحمد؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">250 + 150 = ?</div>",
                    options: ["350 DA", "400 DA", "450 DA", "500 DA"],
                    answer: "400 DA"
                },
                {
                    question: "أحسب جداء العددين التاليين:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">15 * 4 = ?</div>",
                    options: ["50", "60", "70", "80"],
                    answer: "60"
                },
                {
                    question: "كان في حوزة سارة 500 DA، اشترت لعبة بسعر 350 DA. كم بقي معها؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">500 - 350 = ?</div>",
                    options: ["100 DA", "250 DA", "200 DA", "150 DA"],
                    answer: "150 DA"
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
                    question: "قسم مبلغ 1200 DA بالتساوي على 4 أصدقاء. ما هي حصة كل واحد؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">1200 / 4 = ?</div>",
                    options: ["300 DA", "250 DA", "400 DA", "200 DA"],
                    answer: "300 DA"
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
                    question: "إذا كان سعر 3 كراسات هو 105 DA، فما هو سعر الكراس الواحد؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">105 / 3 = ?</div>",
                    options: ["30 DA", "40 DA", "35 DA", "45 DA"],
                    answer: "35 DA"
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
                    options: ["متساوي الساقين", "قائم", "متساوي الأضلاع", "كيفي"],
                    answer: "متساوي الساقين"
                },
                {
                    question: "ما هي الأداة الهندسية التي نستخدمها لرسم دائرة؟",
                    options: ["مسطرة", "كوس", "منقلة", "مدور"],
                    answer: "مدور"
                },
                {
                    question: "شكل رباعي فيه كل ضلعين متقابلين متوازيان ومتقايسان، وزواياه ليست قائمة. ماذا يسمى؟",
                    options: ["مستطيل", "معين", "متوازي أضلاع", "شبه منحرف"],
                    answer: "متوازي أضلاع"
                },
                {
                    question: "مثلث جميع أضلاعه متقايسة. ماذا يسمى؟",
                    options: ["متساوي الأضلاع", "متساوي الساقين", "قائم", "كيفي"],
                    answer: "متساوي الأضلاع"
                }
            ]
        },
        "حساب المحيط والمساحة": {
            exercises: [
                {
                    question: "مستطيل طوله 8 cm وعرضه 5 cm. ما هو محيطه؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">P = (8 + 5) * 2 = ?</div>",
                    options: ["26 cm", "13 cm", "40 cm", "21 cm"],
                    answer: "26 cm"
                },
                {
                    question: "مربع طول ضلعه 6 cm. ما هي مساحته؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">A = 6 * 6 = ?</div>",
                    options: ["24 cm²", "36 cm²", "12 cm²", "18 cm²"],
                    answer: "36 cm²"
                },
                {
                    question: "ما هو محيط مربع طول ضلعه 7 cm؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">P = 7 * 4 = ?</div>",
                    options: ["14 cm", "21 cm", "28 cm", "49 cm"],
                    answer: "28 cm"
                },
                {
                    question: "أوجد مساحة مستطيل طوله 10 m وعرضه 4 m.<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">A = 10 * 4 = ?</div>",
                    options: ["40 m²", "28 m²", "14 m²", "100 m²"],
                    answer: "40 m²"
                },
                {
                    question: "حديقة مربعة الشكل، طول ضلعها 15 m. أراد صاحبها إحاطتها بسياج. ما هو طول السياج اللازم؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">P = 15 * 4 = ?</div>",
                    options: ["30 m", "45 m", "60 m", "225 m"],
                    answer: "60 m"
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
                    question: "أوجد ناتج الجمع:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">1,5 + 2,25 = ?</div>",
                    options: ["3,75", "3,50", "4,00", "3,25"],
                    answer: "3,75"
                },
                {
                    question: "أوجد ناتج الطرح:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">10,5 - 3,2 = ?</div>",
                    options: ["7,7", "7,3", "6,3", "7,5"],
                    answer: "7,3"
                },
                {
                    question: "أوجد ناتج الضرب:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2,5 * 4 = ?</div>",
                    options: ["8", "9", "10", "12"],
                    answer: "10"
                },
                {
                    question: "اشترت فاطمة 1,5 kg من التفاح بسعر 200 DA للكيلوغرام الواحد. ما هو المبلغ الذي دفعته؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">1,5 * 200 = ?</div>",
                    options: ["250 DA", "300 DA", "350 DA", "400 DA"],
                    answer: "300 DA"
                },
                {
                    question: "أوجد ناتج العملية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\"> (5,2 + 1,8) * 2 = ?</div>",
                    options: ["14", "12", "16", "10"],
                    answer: "14"
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
                    question: "إذا كانت وحدة التدريج هي 1 cm، ما هي المسافة بين النقطة D ذات الفاصلة 4 والنقطة E ذات الفاصلة 9؟",
                    options: ["4 cm", "9 cm", "5 cm", "13 cm"],
                    answer: "5 cm"
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
                    answer: "الترتيب"
                },
                {
                    question: "نقطة تقع على محور الفواصل. ماذا تكون قيمة ترتيبها؟",
                    options: ["1", "-1", "0", "تعتمد على الفاصلة"],
                    answer: "0"
                },
                {
                    question: "نقطة تقع على محور التراتيب. ماذا تكون قيمة فاصلتها؟",
                    options: ["1", "-1", "0", "تعتمد على الترتيب"],
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
                    question: "عبر عن مساحة مستطيل طوله L وعرضه 5 cm.",
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
                    question: "إذا كانت العبارة الحرفية لمحيط مربع هي 4x، احسب محيط مربع طول ضلعه 5 cm.<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">P = 4 * 5 = ?</div>",
                    options: ["20 cm", "25 cm", "16 cm", "9 cm"],
                    answer: "20 cm"
                },
                {
                    question: "من أجل x = 3، ما هي قيمة العبارة 2x + 5؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2 * 3 + 5 = ?</div>",
                    options: ["11", "10", "8", "16"],
                    answer: "11"
                },
                {
                    question: "مساحة مستطيل هي L * w. إذا كان L = 10 m و w = 7 m، فما هي مساحته؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">A = 10 * 7 = ?</div>",
                    options: ["70 m²", "17 m²", "34 m²", "3 m²"],
                    answer: "70 m²"
                },
                {
                    question: "إذا كانت y = 2x - 1، أوجد قيمة y عندما تكون x = 4.<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">y = 2 * 4 - 1 = ?</div>",
                    options: ["7", "8", "9", "6"],
                    answer: "7"
                },
                {
                    question: "سعر الدخول لحديقة هو 50 DA للكبار و 20 DA للأطفال. ما هو سعر الدخول لـ 2 كبار و 3 أطفال حسب القاعدة: 50a + 20b؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">50 * 2 + 20 * 3 = ?</div>",
                    options: ["160 DA", "150 DA", "170 DA", "140 DA"],
                    answer: "160 DA"
                }
            ]
        },
        "التعرف على وضعيات تناسبية": {
            exercises: [
                {
                    question: "إذا كان سعر 3 kg من البرتقال هو 450 DA، فهل سعر 6 kg هو 900 DA؟",
                    options: ["نعم، وضعية تناسبية", "لا، ليست وضعية تناسبية", "لا يمكن المعرفة"],
                    answer: "نعم، وضعية تناسبية"
                },
                {
                    question: "سيارة تقطع 100 km في ساعة واحدة. هل تقطع 300 km في 3 ساعات بنفس السرعة؟",
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
                    question: "لتحضير كعكة لـ 4 أشخاص نحتاج 200g من الطحين. لكم شخص يمكننا تحضير كعكة باستعمال 500g من الطحين؟",
                    options: ["8 أشخاص", "10 أشخاص", "12 شخصًا", "6 أشخاص"],
                    answer: "10 أشخاص"
                }
            ]
        },
        "استعمال المقياس والنسب المئوية": {
            exercises: [
                {
                    question: "في قسم به 40 تلميذًا، نجح منهم 80%. ما هو عدد التلاميذ الناجحين؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">40 * (80 / 100) = ?</div>",
                    options: ["30", "32", "35", "28"],
                    answer: "32"
                },
                {
                    question: "سعر سترة 2500 DA. تم تخفيض سعرها بنسبة 20%. ما هي قيمة التخفيض؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2500 * (20 / 100) = ?</div>",
                    options: ["400 DA", "500 DA", "600 DA", "450 DA"],
                    answer: "500 DA"
                },
                {
                    question: "على خريطة، المسافة بين مدينتين هي 5 cm. إذا كان مقياس الخريطة هو 1/100000، فما هي المسافة الحقيقية بالكيلومتر؟",
                    options: ["5 km", "50 km", "0,5 km", "500 km"],
                    answer: "5 km"
                },
                {
                    question: "حول النسبة المئوية 25% إلى كسر عشري.",
                    options: ["0,25", "2,5", "0,025", "25"],
                    answer: "0,25"
                },
                {
                    question: "إذا كانت المسافة الحقيقية بين نقطتين هي 20 km، والمسافة على التصميم هي 10 cm، فما هو مقياس هذا التصميم؟",
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
                    options: ["متساوي الساقين", "قائم", "متساوي الأضلاع", "كيفي"],
                    answer: "قائم"
                },
                {
                    question: "ما هي الخاصية التي يتميز بها قطرا المعين؟",
                    options: ["متوازيان", "متقايسان", "متعامدان وينصف كل منهما الآخر", "ينطبقان"],
                    answer: "متعامدان وينصف كل منهما الآخر"
                },
                {
                    question: "ماذا نسمي المستقيم الذي يشمل ضلعاً من أضلاع المثلث وعمودي على الضلع المقابل له؟",
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
                    answer: "الكوس"
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
                    options: ["-8", "+8", "-2", "+2"],
                    answer: "-2"
                },
                {
                    question: "أحسب الفرق التالي:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">(-7) - (-4) = ?</div>",
                    options: ["-11", "-3", "+3", "+11"],
                    answer: "-3"
                },
                {
                    question: "ما هو ناتج العملية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\"> (+9) + (-9) = ?</div>",
                    options: ["0", "+18", "-18", "1"],
                    answer: "0"
                },
                {
                    question: "أحسب المجموع الجبري التالي:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">A = (-2) + (+5) - (-3) = ?</div>",
                    options: ["0", "+6", "-4", "+10"],
                    answer: "+6"
                },
                {
                    question: "ما هو معاكس العدد 15؟",
                    options: ["15", "-15", "0", "1/15"],
                    answer: "-15"
                }
            ]
        },
        "حساب المسافة بين نقطتين": {
            exercises: [
                {
                    question: "على مستقيم مدرج، فاصلة النقطة A هي 5+ وفاصلة النقطة B هي 2+. ما هي المسافة AB؟",
                    options: ["3", "7", "-3", "-7"],
                    answer: "3"
                },
                {
                    question: "على مستقيم مدرج، فاصلة النقطة C هي 4- وفاصلة النقطة D هي 1-. ما هي المسافة CD؟",
                    options: ["5", "-5", "3", "-3"],
                    answer: "3"
                },
                {
                    question: "على مستقيم مدرج، فاصلة النقطة E هي 6+ وفاصلة النقطة F هي 8-. ما هي المسافة EF؟",
                    options: ["2", "-2", "14", "-14"],
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
                    options: ["x = 7", "x = 17", "x = 5", "x = -7"],
                    answer: "x = 7"
                },
                {
                    question: "أوجد قيمة y في المعادلة:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">y - 3 = 10</div>",
                    options: ["y = 7", "y = 13", "y = -13", "y = 30"],
                    answer: "y = 13"
                },
                {
                    question: "حل المعادلة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">4a = 24</div>",
                    options: ["a = 20", "a = 28", "a = 6", "a = 96"],
                    answer: "a = 6"
                },
                {
                    question: "ما هي قيمة المجهول في المعادلة؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">z / 2 = 8</div>",
                    options: ["z = 4", "z = 10", "z = 16", "z = 6"],
                    answer: "z = 16"
                },
                {
                    question: "إذا كان <div style=\"display: inline-block; text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">2x + 1 = 11</div>، فما هي قيمة x؟",
                    options: ["x = 6", "x = 10", "x = 12", "x = 5"],
                    answer: "x = 5"
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
                    question: "مستطيل طوله 8 سم وعرضه 5 سم. ما هي مساحته؟",
                    options: ["40 سم²", "26 سم²", "13 سم²", "64 سم²"],
                    answer: "40 سم²"
                },
                {
                    question: "مربع طول ضلعه 6 سم. ما هي مساحته؟",
                    options: ["24 سم²", "36 سم²", "12 سم²", "60 سم²"],
                    answer: "36 سم²"
                },
                {
                    question: "مثلث قائم طول قاعدته 10 سم وارتفاعه 4 سم. ما هي مساحته؟",
                    options: ["40 سم²", "14 سم²", "20 سم²", "28 سم²"],
                    answer: "20 سم²"
                },
                {
                    question: "متوازي أضلاع طول قاعدته 7 سم والارتفاع المتعلق بها 3 سم. ما هي مساحته؟",
                    options: ["21 سم²", "10 سم²", "20 سم²", "42 سم²"],
                    answer: "21 سم²"
                },
                {
                    question: "قرص نصف قطره 10 سم. أحسب مساحته (نأخذ π ≈ 3.14).",
                    options: ["31.4 سم²", "62.8 سم²", "314 سم²", "100 سم²"],
                    answer: "314 سم²"
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
                    question: "سعر سلعة 500 دينار، تم تخفيضها بنسبة 20%. ما هو مبلغ التخفيض؟",
                    options: ["20 دينار", "50 دينار", "100 دينار", "400 دينار"],
                    answer: "100 دينار"
                },
                {
                    question: "كيف نكتب النسبة المئوية 25% على شكل كسر؟",
                    options: ["1/4", "1/25", "25/1", "1/5"],
                    answer: "1/4"
                },
                {
                    question: "أخذ نسبة مئوية p% من عدد x يعني ضرب العدد x في...",
                    options: ["p", "100/p", "p/100", "x*p"],
                    answer: "p/100"
                },
                {
                    question: "زاد سعر منتج من 200 دينار إلى 250 دينار. ما هي النسبة المئوية للزيادة؟",
                    options: ["50%", "20%", "25%", "125%"],
                    answer: "25%"
                }
            ]
        },
        "المقياس وتحويل الوحدات": {
            exercises: [
                {
                    question: "على خريطة مقياسها 1/50000، المسافة بين مدينتين هي 4 سم. ما هي المسافة الحقيقية بالكيلومتر؟",
                    options: ["2 كم", "20 كم", "200 كم", "0.2 كم"],
                    answer: "2 كم"
                },
                {
                    question: "لتحويل 2.5 كيلومتر إلى متر، نضرب في...",
                    options: ["10", "100", "1000", "0.1"],
                    answer: "1000"
                },
                {
                    question: "المسافة الحقيقية بين نقطتين هي 50 مترًا. تم تمثيلها على تصميم بـ 5 سم. ما هو مقياس هذا التصميم؟",
                    options: ["1/10", "1/100", "1/1000", "1/50"],
                    answer: "1/1000"
                },
                {
                    question: "كم يساوي 3500 جرام بالكيلوجرام؟",
                    options: ["350 كجم", "35 كجم", "3.5 كجم", "0.35 كجم"],
                    answer: "3.5 كجم"
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
                    "question": "ما هو ناتج العملية <code style='font-family: monospace, monospace; direction: ltr;'>(-5) + (+3) * (-2)</code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+4</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-11</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-1</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+16</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>-11</code>"
                },
                {
                    "question": "أحسب قيمة العبارة <code style='font-family: monospace, monospace; direction: ltr;'>(-10) / (-2) - (+7)</code>.",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-2</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+12</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-12</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+2</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>-2</code>"
                },
                {
                    "question": "ما هي نتيجة <code style='font-family: monospace, monospace; direction: ltr;'>(+8) - (-4) + (-5)</code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-1</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+7</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+17</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-7</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>+7</code>"
                },
                {
                    "question": "إذا كانت <code style='font-family: monospace, monospace; direction: ltr;'>a = -3</code> و <code style='font-family: monospace, monospace; direction: ltr;'>b = +2</code>، فما هي قيمة <code style='font-family: monospace, monospace; direction: ltr;'>a * b - a</code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-9</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-3</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+3</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+9</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>-3</code>"
                },
                {
                    "question": "ما هو مقلوب العدد <code style='font-family: monospace, monospace; direction: ltr;'>-1/5</code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+5</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+1/5</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-5</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-0.2</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>-5</code>"
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
                    "question": "أحسب جداء <code style='font-family: monospace, monospace; direction: ltr;'>(-3/4) * (8/9)</code>.",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-2/3</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-27/32</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>+2/3</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-1/2</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>-2/3</code>"
                },
                {
                    "question": "قارن بين العددين <code style='font-family: monospace, monospace; direction: ltr;'>-2/3</code> و <code style='font-family: monospace, monospace; direction: ltr;'>-3/4</code>.",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-2/3 > -3/4</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-2/3 < -3/4</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-2/3 = -3/4</code>",
                        "لا يمكن المقارنة"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>-2/3 > -3/4</code>"
                },
                {
                    "question": "ما هو ناتج قسمة <code style='font-family: monospace, monospace; direction: ltr;'>(5/6) / (2/3)</code>؟",
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
                    "question": "ما هي قيمة <code style='font-family: monospace, monospace; direction: ltr;'>10<sup>-3</sup></code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>1000</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>0.001</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>-30</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>0.01</code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>0.001</code>"
                },
                {
                    "question": "بسّط العبارة <code style='font-family: monospace, monospace; direction: ltr;'>5<sup>4</sup> * 5<sup>-2</sup></code>.",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5<sup>-8</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5<sup>6</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5<sup>2</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>25<sup>2</sup></code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>5<sup>2</sup></code>"
                },
                {
                    "question": "ما هي الكتابة العلمية للعدد <code style='font-family: monospace, monospace; direction: ltr;'>0.00078</code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>7.8 * 10<sup>4</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>7.8 * 10<sup>-4</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>78 * 10<sup>-5</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>0.78 * 10<sup>-3</sup></code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>7.8 * 10<sup>-4</sup></code>"
                },
                {
                    "question": "أحسب <code style='font-family: monospace, monospace; direction: ltr;'>(2<sup>3</sup>)<sup>2</sup></code>.",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2<sup>5</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2<sup>9</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>2<sup>6</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>4<sup>3</sup></code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>2<sup>6</sup></code>"
                },
                {
                    "question": "ما هي رتبة قدر العدد <code style='font-family: monospace, monospace; direction: ltr;'>5.1 * 10<sup>8</sup></code>؟",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5 * 10<sup>8</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>10<sup>8</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>5 * 10<sup>9</sup></code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>10<sup>9</sup></code>"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>5 * 10<sup>8</sup></code>"
                }
            ]
        },
        "الحساب الحرفي": {
            exercises: [
                {
                    "question": "انشر وبسّط العبارة <code style='font-family: monospace, monospace; direction: ltr;'>3(x + 5) - 2x</code>.",
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
                    "question": "اختبر صحة المساواة <code style='font-family: monospace, monospace; direction: ltr;'>2(y + 3) = 10</code> من أجل <code style='font-family: monospace, monospace; direction: ltr;'>y = 2</code>.",
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
                    "question": "في مثلث قائم، طولا الضلعين القائمين 6 سم و 8 سم. ما هو طول الوتر؟",
                    "options": [
                        "14 سم",
                        "100 سم",
                        "10 سم",
                        "48 سم"
                    ],
                    "answer": "10 سم"
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
                        "متساوي الأضلاع",
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
                        "متساوي الأضلاع",
                        "لا يمكن الجزم"
                    ],
                    "answer": "قائم"
                },
                {
                    "question": "ما هو المستقيم الذي يشمل ضلعاً ويكون عمودياً على حامل الضلع الآخر في المثلث؟",
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
                    "answer": "نقطة D بحيث يكون الرباعي ABDC متوازي أضلاع"
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
                    "question": "إذا كانت C صورة B بالانسحاب الذي شعاعه <code style='font-family: monospace, monospace; direction: ltr;'>vec(u)</code>، فإن...",
                    "options": [
                        "<code style='font-family: monospace, monospace; direction: ltr;'>vec(BC) = vec(u)</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>vec(CB) = vec(u)</code>",
                        "<code style='font-family: monospace, monospace; direction: ltr;'>vec(u) = vec(0)</code>",
                        "B=C"
                    ],
                    "answer": "<code style='font-family: monospace, monospace; direction: ltr;'>vec(BC) = vec(u)</code>"
                },
                {
                    "question": "صورة دائرة نصف قطرها 5 سم بانسحاب هي...",
                    "options": [
                        "دائرة نصف قطرها 10 سم",
                        "دائرة نصف قطرها 5 سم",
                        "نقطة",
                        "قطعة مستقيمة طولها 5 سم"
                    ],
                    "answer": "دائرة نصف قطرها 5 سم"
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
                    "question": "هرم قاعدته مربع طول ضلعه 3 cm وارتفاعه 10 cm. ما هو حجمه؟",
                    "options": ["30 cm³", "90 cm³", "15 cm³", "45 cm³"],
                    "answer": "30 cm³"
                },
                {
                    "question": "مخروط دوران نصف قطر قاعدته 5 cm وارتفاعه 12 cm. ما هو طول مولده؟ (استخدم خاصية فيتاغورس)",
                    "options": ["13 cm", "17 cm", "7 cm", "10 cm"],
                    "answer": "13 cm"
                }
            ]
        },
        "نظرية فيثاغورس": {
            exercises: [
                {
                    "question": "في مثلث قائم، إذا كان طول الوتر 10 cm وأحد الضلعين القائمين 6 cm، فما طول الضلع القائم الآخر؟<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">a² + 6² = 10²</div>",
                    "options": ["8 cm", "7 cm", "9 cm", "4 cm"],
                    "answer": "8 cm"
                },
                {
                    "question": "مثلث أطوال أضلاعه 5 cm, 12 cm, 13 cm. هل هو مثلث قائم؟",
                    "options": ["نعم", "لا", "لا يمكن التحديد"],
                    "answer": "نعم"
                },
                {
                    "question": "في مثلث ABC قائم في A، إذا كان AB = 3 cm و AC = 4 cm، فما هو طول الوتر BC؟",
                    "options": ["5 cm", "6 cm", "7 cm", "25 cm"],
                    "answer": "5 cm"
                },
                {
                    "question": "ما هي الخاصية العكسية لخاصية فيتاغورس؟",
                    "options": ["تستخدم لإثبات أن مثلثًا قائم", "تستخدم لحساب طول ضلع", "تستخدم لحساب مساحة"],
                    "answer": "تستخدم لإثبات أن مثلثًا قائم"
                },
                {
                    "question": "إذا كان مربع طول الوتر في مثلث يساوي مجموع مربعي طولي الضلعين الآخرين، فإن المثلث...",
                    "options": ["قائم", "متساوي الساقين", "متساوي الأضلاع", "كيفي"],
                    "answer": "قائم"
                }
            ]
        },
        "خاصية الدائرة المحيطة بالمثلث القائم": {
            exercises: [
                {
                    "question": "ما هي الخاصية التي يتميز بها المثلث المحاط بدائرة قطرها أحد أضلاعه؟",
                    "options": [
                        "متساوي الساقين",
                        "متساوي الأضلاع",
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
                        "متساوي الأضلاع",
                        "لا يمكن الجزم"
                    ],
                    "answer": "قائم"
                },
                {
                    "question": "ما هو المستقيم الذي يشمل ضلعاً ويكون عمودياً على حامل الضلع الآخر في المثلث؟",
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
        "الحساب المثلثي في مثلث قائم": {
            exercises: [
                {
                    "question": "ماذا يمثل جيب تمام (Cosinus) زاوية حادة في مثلث قائم؟",
                    "options": ["طول الضلع المجاور / طول الوتر", "طول الضلع المقابل / طول الوتر", "طول الضلع المقابل / طول الضلع المجاور"],
                    "answer": "طول الضلع المجاور / طول الوتر"
                },
                {
                    "question": "في مثلث ABC قائم في A، إذا كان AB = 4 cm والوتر BC = 5 cm، فما هو cos(B)؟",
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
                    question: "أنشر وبسط العبارة: 3(2x - 1) + 5x",
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
                    options: ["x + 2 > 5", "x - 1 < 2", "2x < 6", "-x > -3"],
                    answer: "x + 2 > 5"
                },
                {
                    question: "إذا كان a < b، فإن -2a ... -2b",
                    options: [">", "<", "=", "≥"],
                    answer: ">"
                },
                {
                    question: "حل المتراجحة 2x + 1 ≤ 7 هو:",
                    options: ["x ≤ 3", "x ≥ 3", "x ≤ 4", "x ≥ 4"],
                    answer: "x ≤ 3"
                },
                {
                    question: "أي عدد من الأعداد التالية هو حل للمتراجحة 5 - y > 2؟",
                    options: ["1", "3", "4", "5"],
                    answer: "1"
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
                    options: ["x = 5", "x = -5", "x = 15", "x = 3/5"],
                    answer: "x = 5"
                },
                {
                    question: "أوجد قيمة y في المعادلة: y/4 + 1 = 3",
                    options: ["y = 8", "y = 16", "y = 4", "y = 2"],
                    answer: "y = 8"
                },
                {
                    question: "حل المعادلة 2(a + 3) = 14 هو:",
                    options: ["a = 4", "a = 5", "a = 8", "a = 11"],
                    answer: "a = 4"
                },
                {
                    question: "حل المعادلة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">7-2z=1</div>فما هي قيمة z؟",
                    options: ["z = 3", "z = -3", "z = 4", "z = -4"],
                    answer: "z = 3"
                },
                {
                    question: "المعادلة 5x = 2x + 9 تكافئ...",
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
                    "question": "PGCD(15, 7) = ?",
                    options: ["1", "7", "15", "105"],
                    answer: "1"
                },
                {
                    "question": "أي زوج من الأعداد التالية أولي فيما بينه؟",
                    options: ["(12, 15)", "(8, 9)", "(10, 20)", "(7, 21)"],
                    answer: "(8, 9)"
                },
                {
                    "question": "إذا كان a من قواسم b، فإن PGCD(a, b) = ?",
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
                    "question": "ما هو تبسيط &radic;18؟",
                    options: ["2&radic;3", "3&radic;2", "9&radic;2", "6&radic;3"],
                    answer: "3&radic;2"
                },
                {
                    "question": "ناتج &radic;5 * &radic;20 هو:",
                    options: ["&radic;25", "&radic;100", "25", "100"],
                    answer: "&radic;100"
                },
                {
                    "question": "بسط العبارة &radic;75 - &radic;27.",
                    options: ["&radic;48", "2&radic;3", "&radic;12", "3&radic;2"],
                    answer: "2&radic;3"
                },
                {
                    "question": "لكتابة كسر مقامه عدد ناطق، نضرب البسط والمقام في...",
                    "options": ["مربع المقام", "مقلوب المقام", "الجذر التربيعي للمقام", "مرافق المقام"],
                    answer: "الجذر التربيعي للمقام"
                },
                {
                    "question": "ما هي قيمة (&radic;7)²؟",
                    options: ["49", "14", "7", "&radic;14"],
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
                    options: ["(x - 7)(x + 7)", "(x - 7)²", "(x + 7)²", "(x - 49)(x + 49)"],
                    answer: "(x - 7)(x + 7)"
                },
                {
                    "question": "حلل العبارة التالية:<br><div style=\"text-align: left; direction: ltr; font-family: 'Courier New', monospace;\">9z² + 12z + 4 = ?</div>",
                    options: ["(3z + 2)²", "(3z - 2)²", "(9z + 2)²", "(3z + 4)²"],
                    answer: "(3z + 2)²"
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
                    "question": "حلل العبارة (x+1)² - (x+1)(2x-3)؟",
                    options: ["(x+1)(-x+4)", "(x+1)(3x-2)", "-x+4", "(x+1)(x-4)"],
                    answer: "(x+1)(-x+4)"
                },
                {
                    "question": "استخدم المتطابقات الشهيرة لتحليل x² - 16.",
                    options: ["(x-4)(x+4)", "(x-4)²", "(x+4)²", "(x-16)(x+16)"],
                    answer: "(x-4)(x+4)"
                },
                {
                    "question": "تحليل العبارة 4y² + 12y + 9 هو:",
                    options: ["(2y+3)²", "(2y-3)²", "(4y+3)(y+3)", "(2y+9)(2y+1)"],
                    answer: "(2y+3)²"
                }
            ]
        },
        "المعادلات من الدرجة الثانية البسيطة": {
            exercises: [
                {
                    "question": "ما هي حلول المعادلة x² = 49؟",
                    options: ["7", "-7", "7 و -7", "لا توجد حلول"],
                    answer: "7 و -7"
                },
                {
                    "question": "حلول المعادلة y² = -9 هي:",
                    "options": ["3", "-3", "3 و -3", "لا توجد حلول حقيقية"],
                    answer: "لا توجد حلول حقيقية"
                },
                {
                    "question": "حل المعادلة (x-1)(x+5) = 0 هو:",
                    "options": ["x=1 أو x=-5", "x=-1 أو x=5", "x=1 فقط", "x=-5 فقط"],
                    answer: "x=1 أو x=-5"
                },
                {
                    "question": "ما هي حلول المعادلة (2x - 4)(x + 3) = 0؟",
                    "options": ["x=2 أو x=-3", "x=-2 أو x=3", "x=4 أو x=-3", "x=2 فقط"],
                    "answer": "x=2 أو x=-3"
                },
                {
                    "question": "لحل المعادلة x² - 9 = 0، يمكن تحليلها إلى...",
                    "options": ["(x-3)(x+3)=0", "(x-9)(x+9)=0", "x(x-9)=0", "لا يمكن تحليلها"],
                    "answer": "(x-3)(x+3)=0"
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
                    "question": "حل المتراجحة 4 - 2y ≤ 10 هو:",
                    "options": ["y ≥ -3", "y ≤ -3", "y ≥ 3", "y ≤ 3"],
                    answer: "y ≥ -3"
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
                    "options": ["u", "-u", "2u", "الشعاع المعدوم"],
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
                    "options": ["(2, 3)", "(3, 2)", "(4, 1)", "(1, 4)"],
                    answer: "(3, 2)"
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
                    "options": ["-2", "5", "3", "7"],
                    answer: "3"
                }
            ]
        },
        "الزوايا والمضلعات المنتظمة والدوران": {
            exercises: []
        },
        "الهندسة الفضائية": {
            exercises: [
                {
                    "question": "ما هو حجم مكعب طول حرفه 3 سم؟",
                    "options": ["9 سم³", "18 سم³", "27 سم³", "12 سم³"],
                    answer: "27 سم³"
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
                    "options": ["4πR²", "(4/3)πR³", "πR³", "2πR"],
                    answer: "(4/3)πR³"
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
