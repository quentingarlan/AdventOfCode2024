const inputTest: string = `61|32
19|74
19|96
82|29
82|54
82|83
37|26
37|53
37|38
37|14
36|28
36|39
36|99
36|42
36|62
76|35
76|51
76|58
76|33
76|13
76|37
42|85
42|37
42|28
42|62
42|41
42|83
42|59
26|78
26|55
26|11
26|97
26|92
26|29
26|54
26|82
98|74
98|23
98|54
98|11
98|55
98|69
98|34
98|97
98|85
35|36
35|69
35|73
35|14
35|96
35|42
35|48
35|11
35|26
35|82
29|54
29|18
29|74
29|42
29|92
29|45
29|36
29|85
29|96
29|61
29|32
11|45
11|73
11|92
11|29
11|61
11|83
11|59
11|74
11|85
11|69
11|97
11|96
73|39
73|61
73|99
73|41
73|59
73|69
73|78
73|54
73|76
73|85
73|55
73|36
73|23
87|15
87|45
87|13
87|98
87|48
87|68
87|58
87|96
87|33
87|29
87|19
87|14
87|51
87|26
54|85
54|42
54|74
54|23
54|97
54|76
54|99
54|62
54|87
54|34
54|39
54|36
54|37
54|28
54|32
55|28
55|99
55|54
55|97
55|87
55|59
55|37
55|88
55|76
55|92
55|39
55|61
55|43
55|34
55|85
55|74
32|62
32|43
32|87
32|51
32|12
32|99
32|98
32|19
32|18
32|88
32|15
32|26
32|53
32|33
32|48
32|35
32|28
85|43
85|99
85|58
85|83
85|48
85|28
85|62
85|32
85|41
85|18
85|88
85|38
85|37
85|87
85|34
85|35
85|68
85|72
58|26
58|38
58|11
58|55
58|82
58|73
58|98
58|96
58|33
58|35
58|12
58|78
58|69
58|29
58|53
58|51
58|14
58|45
58|13
51|19
51|69
51|12
51|29
51|54
51|45
51|48
51|38
51|13
51|78
51|96
51|68
51|98
51|55
51|72
51|35
51|36
51|15
51|73
51|26
45|23
45|41
45|18
45|43
45|28
45|99
45|54
45|61
45|69
45|32
45|76
45|59
45|42
45|83
45|36
45|97
45|55
45|78
45|73
45|85
45|74
88|35
88|96
88|51
88|98
88|58
88|53
88|82
88|72
88|38
88|19
88|12
88|69
88|14
88|68
88|62
88|11
88|48
88|33
88|15
88|29
88|26
88|73
34|26
34|53
34|12
34|87
34|43
34|35
34|99
34|51
34|28
34|62
34|48
34|68
34|88
34|14
34|23
34|37
34|18
34|58
34|76
34|32
34|38
34|83
34|72
62|14
62|11
62|72
62|78
62|51
62|26
62|38
62|73
62|69
62|96
62|15
62|35
62|45
62|58
62|98
62|53
62|68
62|13
62|48
62|29
62|12
62|19
62|33
62|82
15|82
15|45
15|54
15|96
15|42
15|73
15|98
15|36
15|55
15|74
15|29
15|23
15|92
15|39
15|34
15|19
15|59
15|11
15|78
15|69
15|85
15|97
15|41
15|61
14|15
14|13
14|55
14|11
14|45
14|61
14|96
14|33
14|92
14|74
14|82
14|19
14|98
14|42
14|54
14|12
14|26
14|69
14|29
14|59
14|36
14|38
14|78
14|73
74|83
74|99
74|59
74|18
74|51
74|43
74|48
74|61
74|41
74|88
74|87
74|32
74|62
74|85
74|23
74|97
74|35
74|39
74|37
74|58
74|28
74|76
74|53
74|34
43|51
43|58
43|28
43|62
43|99
43|68
43|19
43|11
43|18
43|72
43|38
43|15
43|37
43|48
43|53
43|14
43|87
43|13
43|33
43|35
43|88
43|98
43|26
43|12
12|61
12|69
12|98
12|11
12|15
12|54
12|78
12|19
12|96
12|92
12|36
12|13
12|55
12|26
12|29
12|97
12|59
12|39
12|74
12|85
12|45
12|73
12|82
12|42
18|82
18|87
18|38
18|58
18|35
18|19
18|12
18|53
18|33
18|14
18|51
18|48
18|13
18|68
18|99
18|98
18|11
18|88
18|28
18|37
18|72
18|15
18|62
18|26
13|92
13|61
13|78
13|15
13|97
13|11
13|19
13|85
13|73
13|39
13|54
13|69
13|74
13|55
13|36
13|59
13|98
13|41
13|45
13|34
13|42
13|29
13|82
13|96
97|18
97|43
97|83
97|37
97|72
97|58
97|35
97|62
97|48
97|53
97|41
97|85
97|88
97|87
97|39
97|99
97|23
97|68
97|51
97|76
97|14
97|32
97|28
97|34
28|38
28|58
28|82
28|48
28|51
28|15
28|19
28|37
28|72
28|12
28|14
28|62
28|99
28|29
28|35
28|11
28|53
28|13
28|33
28|88
28|26
28|98
28|68
28|87
23|99
23|62
23|53
23|28
23|32
23|76
23|18
23|68
23|38
23|51
23|48
23|33
23|83
23|87
23|88
23|13
23|12
23|37
23|35
23|43
23|14
23|26
23|72
23|58
99|38
99|68
99|37
99|26
99|98
99|15
99|11
99|33
99|14
99|87
99|88
99|72
99|48
99|19
99|12
99|51
99|62
99|53
99|96
99|13
99|29
99|35
99|58
99|82
69|78
69|43
69|54
69|23
69|28
69|97
69|36
69|34
69|61
69|59
69|76
69|83
69|42
69|37
69|92
69|32
69|41
69|87
69|39
69|99
69|74
69|55
69|18
69|85
41|58
41|18
41|12
41|76
41|87
41|37
41|51
41|28
41|48
41|23
41|32
41|62
41|33
41|34
41|14
41|38
41|53
41|43
41|72
41|99
41|68
41|83
41|35
41|88
68|54
68|98
68|12
68|73
68|36
68|74
68|33
68|38
68|15
68|55
68|14
68|11
68|96
68|26
68|13
68|78
68|92
68|69
68|29
68|45
68|42
68|59
68|82
68|19
48|33
48|26
48|68
48|11
48|73
48|14
48|72
48|92
48|38
48|96
48|45
48|78
48|54
48|13
48|98
48|29
48|19
48|36
48|69
48|15
48|82
48|55
48|42
48|12
33|54
33|45
33|13
33|74
33|78
33|92
33|85
33|29
33|69
33|82
33|59
33|19
33|61
33|96
33|15
33|11
33|42
33|73
33|98
33|26
33|97
33|36
33|55
33|12
59|72
59|32
59|41
59|99
59|37
59|58
59|61
59|34
59|51
59|48
59|53
59|62
59|18
59|85
59|97
59|35
59|87
59|83
59|88
59|28
59|39
59|23
59|43
59|76
72|19
72|11
72|26
72|12
72|96
72|69
72|54
72|74
72|92
72|15
72|29
72|33
72|13
72|55
72|38
72|45
72|98
72|14
72|78
72|82
72|42
72|68
72|36
72|73
38|69
38|19
38|96
38|92
38|82
38|73
38|45
38|74
38|33
38|97
38|15
38|36
38|11
38|98
38|42
38|12
38|55
38|59
38|26
38|13
38|29
38|54
38|78
38|61
39|18
39|14
39|34
39|43
39|87
39|58
39|83
39|99
39|37
39|28
39|23
39|48
39|41
39|76
39|68
39|38
39|53
39|51
39|33
39|35
39|88
39|32
39|62
39|72
53|26
53|82
53|15
53|55
53|33
53|38
53|69
53|14
53|35
53|45
53|48
53|54
53|72
53|51
53|73
53|96
53|13
53|29
53|11
53|19
53|12
53|78
53|98
53|68
96|74
96|42
96|32
96|18
96|73
96|83
96|34
96|85
96|36
96|78
96|59
96|61
96|92
96|43
96|45
96|23
96|28
96|55
96|39
96|97
96|76
96|69
96|41
96|54
92|83
92|53
92|74
92|28
92|61
92|85
92|18
92|51
92|39
92|88
92|62
92|23
92|32
92|34
92|99
92|43
92|76
92|59
92|37
92|41
92|87
92|58
92|97
92|35
78|87
78|32
78|39
78|59
78|41
78|34
78|97
78|85
78|88
78|42
78|76
78|55
78|83
78|61
78|43
78|37
78|99
78|74
78|23
78|36
78|54
78|18
78|28
78|92
83|13
83|68
83|99
83|76
83|72
83|37
83|43
83|51
83|48
83|58
83|38
83|62
83|18
83|15
83|87
83|33
83|35
83|53
83|12
83|26
83|32
83|28
83|88
83|14
61|62
61|68
61|34
61|88
61|48
61|18
61|72
61|23
61|41
61|99
61|83
61|58
61|35
61|37
61|87
61|76
61|85
61|51
61|28
61|53
61|39
61|97
61|43
19|39
19|55
19|69
19|34
19|92
19|11
19|83
19|23
19|85
19|45
19|59
19|61
19|54
19|98
19|73
19|29
19|36
19|42
19|82
19|41
19|78
19|97
82|45
82|78
82|85
82|61
82|23
82|76
82|59
82|41
82|39
82|34
82|97
82|92
82|55
82|96
82|43
82|69
82|73
82|32
82|42
82|74
82|36
37|98
37|33
37|68
37|48
37|19
37|62
37|45
37|58
37|82
37|73
37|29
37|96
37|35
37|11
37|15
37|12
37|88
37|51
37|72
37|13
36|87
36|74
36|61
36|41
36|59
36|32
36|23
36|76
36|37
36|83
36|88
36|18
36|92
36|43
36|97
36|34
36|58
36|53
36|85
76|26
76|28
76|18
76|99
76|15
76|72
76|62
76|32
76|19
76|87
76|48
76|43
76|38
76|12
76|14
76|88
76|68
76|53
42|92
42|53
42|87
42|97
42|51
42|99
42|34
42|61
42|23
42|76
42|58
42|39
42|74
42|32
42|43
42|88
42|18
26|69
26|36
26|39
26|73
26|59
26|42
26|61
26|85
26|19
26|45
26|41
26|13
26|15
26|96
26|74
26|98
98|41
98|59
98|45
98|73
98|29
98|92
98|82
98|83
98|96
98|39
98|78
98|42
98|76
98|61
98|36
35|15
35|78
35|12
35|29
35|38
35|72
35|68
35|54
35|33
35|98
35|19
35|13
35|55
35|45
29|78
29|76
29|34
29|43
29|55
29|69
29|41
29|97
29|73
29|83
29|59
29|23
29|39
11|32
11|39
11|76
11|54
11|78
11|82
11|36
11|34
11|41
11|55
11|23
11|42
73|34
73|42
73|18
73|87
73|74
73|28
73|97
73|83
73|92
73|43
73|32
87|37
87|62
87|11
87|12
87|72
87|53
87|38
87|35
87|88
87|82
54|18
54|58
54|92
54|61
54|43
54|83
54|59
54|41
54|88
55|18
55|36
55|83
55|42
55|23
55|32
55|41
55|62
32|37
32|58
32|72
32|38
32|14
32|68
32|13
85|23
85|51
85|39
85|14
85|53
85|76
58|68
58|15
58|72
58|19
58|48
51|82
51|33
51|11
51|14
45|92
45|34
45|39
88|13
88|45
34|33

62,33,12,19,48,99,14,98,29,82,72,37,51
39,83,76,32,43,18,87,37,53,51,35,48,38
83,28,37,88,62,58,53,68,13
68,15,19,35,13,26,48,38,58,12,51,32,18,87,53,14,88,33,62,28,72,43,99
19,34,69,29,11,45,78,74,82,23,42
62,58,53,68,14,33,12,26,15,98,11,82,29,96,69
35,72,48,38,34,83,99,37,33,88,76,53,28,62,32,18,23,87,43,68,14,12,51
73,69,19,59,92,61,39,45,55,85,97,82,42,15,54,13,11,41,29
19,98,29,69,36,92,59,97,39,41,23
51,18,88,34,72
92,74,59,61,97,23,99,87,88,62,51
58,51,72,68,33,13,15,19,98,11,82,29,96,45,73,69,78
41,23,83,76,32,43,18,87,37,88,62,51,35,48,72,68,14,38,33
61,58,28,39,85,97,18,48,83,41,34,43,32,59,62,51,37,23,76,53,99
76,32,48,43,83,72,99,53,88,51,62,41,14,87,18,33,38,68,34,23,28,58,35
74,59,61,97,85,41,34,23,76,99,87,37,62,51,35
42,39,61,23,83,74,85,88,62,41,92,28,54,76,99,87,36,18,43,37,32,97,34
78,96,59,69,41,55,43,18,73
55,54,36,42,74,61,39,41,23,83,43,18,99
85,92,23,73,39,76,99,43,54
32,43,41,72,23,68,35,34,62,53,14,51,88,48,85,99,58
26,35,33,48,53,12,98,13,55,78,51,68,96,11,14,29,73,45,72
82,73,55,54,36,59,97,41,34
69,78,55,36,42,92,74,59,61,97,85,39,41,23,83,76,32,43,18,28,99
42,23,34,74,83,54,85,59,69,82,98,96,92
78,54,42,92,74,59,61,85,41,34,23,76,18,28,99,87,37
69,96,36,68,98,14,42,38,19,33,82,92,11,45,15,29,72,12,78,55,73,13,26
98,69,36,92,59
29,69,39,41,34,32,43
85,87,83,76,48,18,43,61,72,99,51,53,28
54,96,82,74,69,42,15
88,62,87,48,38,26,15,58,33,35,29,96,98,72,82,12,11
42,78,36,61,59,11,54,82,12,19,55,69,15,73,98,33,74
78,92,59,33,55,61,15,26,11,36,42,74,73
35,28,74,18,87,51,53,97,85
62,87,92,32,74,59,76,36,39,43,58
28,99,37,88,62,58,53,51,35,48,68,14,38,33,12,26,13,15,98,11,82
48,72,33,58,41,99,14,51,38,43,88,37,34,28,68
61,97,85,41,83,76,37,88,58,53,35
99,87,37,62,53,51,48,14,38,33,15,19,98,82,29
68,33,96,45,69,78,55,54,74
26,33,13,45,72,48,68,19,96,51,88,11,82,38,98,62,12
36,61,99,92,74,41,55,39,54,43,78,76,28,87,23
32,39,85,34,88,18,53,58,51,76,83,97,43,23,37,62,41,59,87,61,99
28,99,87,37,88,48,38,98,82
38,33,12,15,19,98,11,78,55,36,42,92,74,59,61
53,51,35,72,68,38,33,12,15,19,11,45,73,69,55
18,62,58,48,72,14,33,26,13,15,19
62,48,14,38,19,45,69
13,15,82,29,96,73,69,55,54,36,42,92,74,59,61,97,85,39,41
43,32,12,34,35,88,53
35,48,72,14,33,26,82,96,73,54,36
96,29,38,33,53,14,82,98,51,45,35,48,13,68,69,73,15,19,78,26,72,11,58
88,58,53,35,48,68,14,38,33,12,26,13,98,82,29
59,26,96,73,55,42,39,54,61,82,11,29,92,74,78
92,74,59,61,39,76,43,28,99,87,37,62,51
87,43,26,72,15,14,48,53,99,58,32,68,37,62,13
23,83,76,32,18,28,99,87,37,88,62,58,53,51,35,48,72,68,14,38,33,12,26
29,82,92,55,54
99,23,88,51,37
34,41,61,45,97,83,29,54,69,98,39,96,74,23,92,73,78,36,11,55,42,59,85
26,76,33,87,14,83,48,51,53,88,23
41,43,85,99,23,37,87,62,97,83,92,32,61,39,28,54,42,34,88,59,76
32,43,28,99,87,37,62,58,68,14,33,26,13,15,19
72,68,14,38,33,12,26,13,15,19,98,11,82,29,96,45,69,78,55,54,36,42,92
83,18,87,37,58,51,72,12,13
39,45,82,55,32,69,42,54,97,96,73
53,68,38,26,82,29,45,69,55
32,61,99,76,28,78,55,41,43,87,85,42,34,37,54
51,35,48,72,68,14,38,33,12,26,13,19,98,11,82,29,96,45,73,69,78,55,54
74,59,61,97,85,39,41,34,23,83,76,32,18,28,88,62,53,51,35
15,54,98,36,39,59,11,82,42,85,96,41,13,78,92,74,55
54,68,14,29,48,82,35,45,15,55,96,33,78,13,26,36,72,12,73,38,11
97,85,39,37,62,53,68
73,78,42,74,97,85,41,34,23,76,32,43,99
76,32,18,58,48,72,38
68,14,38,12,26,13,15,19,11,73,69,78,36,92,74
33,68,38,87,15,18,35,11,19
92,39,23,69,55,96,32,45,18
36,42,59,34,83,32,43,28,37,88,58
72,68,14,38,33,12,26,15,19,98,11,82,29,96,45,73,69,78,55,54,36,42,92
23,33,88,53,14,62,41,99,72
36,92,61,97,39,23,83,18,28,99,87,37,58
32,43,18,28,99,87,37,62,58,53,35,48,68,38,12,26,15
19,72,48,78,29,55,26,53,13,98,45,69,73,14,38,12,35
38,96,11,82,69,55,33,45,15,98,29
12,13,98,11,82,29,96,73,69,55,54,42,92,74,59,97,85
28,85,53,37,97,35,48,58,34,87,62,18,51
39,61,41,54,42,23,59,74,83,76,87,36,78,97,99,28,55,18,92,37,32
36,92,74,59,61,85,34,83,76,43,99,87,37,88,58
98,82,69,15,11,97,29,13,39,61,73,78,41,92,96,36,74
53,68,99,58,62,35,97,85,37,51,72
85,87,61,28,99
51,14,33,15,73,55,54
15,88,72,99,48,76,35,68,13
15,29,96,45,73,55,36,42,92,97,85,39,34
87,13,72,15,88,12,43,51,18,53,26,58,62,14,98,38,99,19,48,28,37,33,35
68,38,33,12,26,15,74
39,36,55,32,45,42,83,43,34,61,78,74,76,85,23,73,92,96,59
59,61,97,85,39,41,23,83,76,32,43,18,28,99,87,37,88,62,53,35,48
68,42,12,15,26,11,54,74,38,29,19,73,82
83,62,58,34,76,61,42,88,32,74,92,43,39,37,23,53,87,99,18,85,41
58,37,53,48,76,35,14,51,39,99,85,34,23
43,37,87,18,28,68,35,48,32,76,12,51,38,23,83,58,34,33,14,99,72,62,88
83,76,18,37,88,62,51,35,72,14,38,33,13
18,35,23,87,51,76,32,37,99
61,45,78,55,41,92,83,69,34,43,42,85,59,73,74,36,28,32,76,97,54
35,72,68,33,19,78,36
18,28,87,37,88,62,53,51,35,48,14,38,12,15,19,98,11
26,88,73,58,35,14,11,48,51,12,72
45,55,36,61,34,83,76,43,28
78,55,54,36,42,74,59,61,83,76,43,18,99
51,14,28,53,58,23,68,72,88,18,37,48,32,33,99,12,76,38,62,87,83,34,35
15,88,12,37,99,28,48
15,73,82,42,11,26,38,19,55,12,33,45,14,48,54,72,68
85,99,74,92,59,62,76,23,18,34,39,32,83
99,88,62,53,51,35,98,11,29
39,78,23,29,59,73,54,32,83,41,43
54,11,74,59,15,19,29,45,42,78,55,14,82,96,92,13,26
38,68,53,82,62,37,45
76,59,28,99,92,32,43,97,18
88,62,85,92,83,41,51,99,58,87,97,34,39,76,23,59,37,61,18
53,28,35,11,88,33,15,72,82,58,98,48,13,51,19
85,19,69,73,42,61,45,59,41,11,15,34,54,36,55,78,97,96,39,98,29
15,53,58,76,99,43,88,12,26,33,28
73,69,29,36,85,34,43,42,55,54,39,74,92,83,97
74,42,85,26,97,15,73,39,82,45,98,59,29,92,13,36,78
19,98,29,45,73,69,42,59,97,39,41,34,23
23,61,83,37,58,59,51,32,39,53,92,76,97
55,54,36,92,59,61,97,85,39,41,34,23,32,43,18,28,99,37,88
18,76,38,58,51,83,32
62,68,14,58,38,35,12,26,98,82,13
76,99,14,88,83,43,53,51,23,37,34,58,35,68,18,48,32,72,38,28,87,41,39
36,92,97,85,39,41,83,76,32,18,99,88,58
11,82,29,96,45,73,69,78,54,36,42,92,74,59,61,97,85,39,41,34,23,83,76
51,35,72,68,14,38,12,26,13,19,11,82,45,73,78,55,54
13,82,33,73,69,35,72,29,11,53,45,12,38,58,98,26,51
36,37,76,59,34,54,32,42,61,55,23,28,85,92,41,74,88,39,18,83,87,97,43
29,96,45,73,55,54,36,92,74,61,85,39,41,34,76,32,43
48,38,15,19,98,69,78,55,42
29,45,73,78,55,54,36,42,92,74,59,61,97,85,34,23,83,76,32
74,85,34,18,53,51,35
53,58,51,97,34,61,72,28,32,37,83
39,55,76,54,23,82,59,29,11,45,97,42,78
74,59,97,39,34,32,43,18,99,87,62,58,53,51,35
55,74,39,92,42
38,33,12,26,13,15,19,11,82,29,96,45,69,55,92,59,61
83,73,41,61,29,96,74,23,92,36,69
32,96,69,97,36,82,55
61,37,51,58,28,85,87,59,99,34,74,53,18,83,43,62,76,92,39
35,33,12,26,15,19,98,96,45,78,55,54,36
19,11,82,29,96,45,73,69,78,54,36,42,92,74,61,97,85,39,41,34,23
12,72,14,11,26,73,92,42,82
68,14,26,13,15,98,11,82,29,96,69,78,55,54,36,42,92
76,61,23,39,37,51,28,48,97,43,35,32,88,85,34,53,62,59,99,83,58
98,11,73,13,96,29,19,36,74,39,41,92,59,85,97,82,69,78,45
26,37,72,35,14,33,58,68,48,12,15,51,62,38,98,82,88,11,13,96,87,19,53
45,42,92,74,85,34,23,83,32,43,28
62,48,12,15,58,37,99,87,13,28,68,72,33,51,14,38,82,53,35,19,98
45,73,69,78,54,36,42,92,74,61,85,39,41,34,83,76,28
42,92,97,39,41,83,18,28,99,37,53
13,98,59,82,74,45,14
87,35,33,15,19,29,96
53,26,11,14,12,18,88,72,33,87,35
96,15,53,48,14,13,35,58,26,98,51,88,38,62,11,68,37,72,82,19,33
12,96,36,13,11,33,45,74,19,68,54,82,78,29,42,98,26,69,15,73,92
62,18,51,39,48,83,68,76,97,87,32
82,96,73,92,85,39,34,23,32
28,99,88,62,58,53,51,35,48,72,68,14,38,12,26,13,15,19,98,11,82
34,83,76,28,99,62,58,51,35,48,72,14,38
69,78,55,54,36,42,92,59,61,97,85,39,41,34,23,83,76,32,43,18,28,99,87
45,88,82,98,35,37,12
12,45,68,53,72,48,19,98,11,26,51,15,13,33,58,69,96,14,29,35,82
62,68,11,13,29,14,37,53,19,58,51,35,98,82,48
48,68,53,18,72,38,26,88,14,51,11
83,18,28,99,87,88,62,58,53,51,35,48,68,14,38,33,12,26,13
69,78,54,42,92,59,61,97,41,23,32,43,18,28,99
69,61,36,12,74
58,53,51,35,48,72,68,38,33,12,26,13,15,19,98,11,29,96,45,73,78
39,41,23,76,32,43,28,87,37,88,62,58,53,51,35,72,68,14,38
35,68,14,45,51,26,96,58,33,38,62,15,12,98,11,72,37,19,82,13,88,29,48
82,78,11,35,38,45,15,68,19,72,29,53,69,58,96,98,13
33,68,11,18,12
61,76,34,41,58,99,97,88,43,37,72,23,39,62,28
61,43,55,32,39,97,74,59,23,18,92,78,83
43,18,28,87,88,62,58,53,51,35,48,72,14,38,33,12,26,13,19
34,55,29,61,41,42,96,23,97,85,98,83,74,92,82,36,69,39,45,54,11,78,59
43,18,99,87,37,88,58,53,35,68,14,33,12,26,19
53,62,35,34,87,48,58,37,39,41,43,14,68,88,83`
export { inputTest }
