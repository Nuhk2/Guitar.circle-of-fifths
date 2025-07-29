export interface ChordInfo {
  name: string;
  type: 'major' | 'minor';
  keySignature: string;
  relative: string;
  notes: string[];
  progressions: {
    one: string;
    two: string;
  };
  fingerPositions?: {
    [key: number]: string | number;
  };
}

export const circleChords: { major: ChordInfo; minor: ChordInfo }[] = [
  {
    major: {
      name: 'C',
      type: 'major',
      keySignature: 'No sharps or flats',
      relative: 'A minor',
      notes: ['C', 'E', 'G'],
      progressions: {
        one: 'C - F - G',
        two: 'C - Am - F - G'
      },
      fingerPositions: {
        6: 'X',
        5: 3,
        4: 2,
        3: 0,
        2: 1,
        1: 0
      }
    },
    minor: {
      name: 'A',
      type: 'minor',
      keySignature: 'No sharps or flats',
      relative: 'C major',
      notes: ['A', 'C', 'E'],
      progressions: {
        one: 'Am - Dm - E',
        two: 'Am - F - G'
      },
      fingerPositions: {
        6: 'X',
        5: 0,
        4: 2,
        3: 2,
        2: 1,
        1: 0
      }
    }
  },
  {
    major: {
      name: 'G',
      type: 'major',
      keySignature: '1 sharp (F♯)',
      relative: 'E minor',
      notes: ['G', 'B', 'D'],
      progressions: {
        one: 'G - C - D',
        two: 'G - Em - C - D'
      },
      fingerPositions: {
        6: 3,
        5: 2,
        4: 0,
        3: 0,
        2: 0,
        1: 3
      }
    },
    minor: {
      name: 'E',
      type: 'minor',
      keySignature: '1 sharp (F♯)',
      relative: 'G major',
      notes: ['E', 'G', 'B'],
      progressions: {
        one: 'Em - Am - B',
        two: 'Em - C - D'
      },
      fingerPositions: {
        6: 0,
        5: 2,
        4: 2,
        3: 0,
        2: 0,
        1: 0
      }
    }
  },
  {
    major: {
      name: 'D',
      type: 'major',
      keySignature: '2 sharps (F♯, C♯)',
      relative: 'B minor',
      notes: ['D', 'F♯', 'A'],
      progressions: {
        one: 'D - G - A',
        two: 'D - Bm - G - A'
      },
      fingerPositions: {
        6: 'X',
        5: 'X',
        4: 0,
        3: 2,
        2: 3,
        1: 2
      }
    },
    minor: {
      name: 'B',
      type: 'minor',
      keySignature: '2 sharps (F♯, C♯)',
      relative: 'D major',
      notes: ['B', 'D', 'F♯'],
      progressions: {
        one: 'Bm - Em - F♯',
        two: 'Bm - G - A'
      },
      fingerPositions: {
        6: 'X',
        5: 2,
        4: 4,
        3: 4,
        2: 3,
        1: 2
      }
    }
  },
  {
    major: {
      name: 'A',
      type: 'major',
      keySignature: '3 sharps (F♯, C♯, G♯)',
      relative: 'F♯ minor',
      notes: ['A', 'C♯', 'E'],
      progressions: {
        one: 'A - D - E',
        two: 'A - F♯m - D - E'
      },
      fingerPositions: {
        6: 'X',
        5: 0,
        4: 2,
        3: 2,
        2: 2,
        1: 0
      }
    },
    minor: {
      name: 'F♯',
      type: 'minor',
      keySignature: '3 sharps (F♯, C♯, G♯)',
      relative: 'A major',
      notes: ['F♯', 'A', 'C♯'],
      progressions: {
        one: 'F♯m - Bm - C♯',
        two: 'F♯m - D - E'
      },
      fingerPositions: {
        6: 2,
        5: 4,
        4: 4,
        3: 2,
        2: 2,
        1: 2
      }
    }
  },
  {
    major: {
      name: 'E',
      type: 'major',
      keySignature: '4 sharps (F♯, C♯, G♯, D♯)',
      relative: 'C♯ minor',
      notes: ['E', 'G♯', 'B'],
      progressions: {
        one: 'E - A - B',
        two: 'E - C♯m - A - B'
      },
      fingerPositions: {
        6: 0,
        5: 2,
        4: 2,
        3: 1,
        2: 0,
        1: 0
      }
    },
    minor: {
      name: 'C♯',
      type: 'minor',
      keySignature: '4 sharps (F♯, C♯, G♯, D♯)',
      relative: 'E major',
      notes: ['C♯', 'E', 'G♯'],
      progressions: {
        one: 'C♯m - F♯m - G♯',
        two: 'C♯m - A - B'
      },
      fingerPositions: {
        6: 'X',
        5: 4,
        4: 6,
        3: 6,
        2: 5,
        1: 4
      }
    }
  },
  {
    major: {
      name: 'B',
      type: 'major',
      keySignature: '5 sharps (F♯, C♯, G♯, D♯, A♯)',
      relative: 'G♯ minor',
      notes: ['B', 'D♯', 'F♯'],
      progressions: {
        one: 'B - E - F♯',
        two: 'B - G♯m - E - F♯'
      },
      fingerPositions: {
        6: 'X',
        5: 2,
        4: 4,
        3: 4,
        2: 4,
        1: 2
      }
    },
    minor: {
      name: 'G♯',
      type: 'minor',
      keySignature: '5 sharps (F♯, C♯, G♯, D♯, A♯)',
      relative: 'B major',
      notes: ['G♯', 'B', 'D♯'],
      progressions: {
        one: 'G♯m - C♯m - D♯',
        two: 'G♯m - E - F♯'
      },
      fingerPositions: {
        6: 4,
        5: 6,
        4: 6,
        3: 4,
        2: 4,
        1: 4
      }
    }
  },
  {
    major: {
      name: 'F♯',
      type: 'major',
      keySignature: '6 sharps (F♯, C♯, G♯, D♯, A♯, E♯)',
      relative: 'D♯ minor',
      notes: ['F♯', 'A♯', 'C♯'],
      progressions: {
        one: 'F♯ - B - C♯',
        two: 'F♯ - D♯m - B - C♯'
      },
      fingerPositions: {
        6: 2,
        5: 4,
        4: 4,
        3: 3,
        2: 2,
        1: 2
      }
    },
    minor: {
      name: 'D♯',
      type: 'minor',
      keySignature: '6 sharps (F♯, C♯, G♯, D♯, A♯, E♯)',
      relative: 'F♯ major',
      notes: ['D♯', 'F♯', 'A♯'],
      progressions: {
        one: 'D♯m - G♯m - A♯',
        two: 'D♯m - B - C♯'
      },
      fingerPositions: {
        6: 'X',
        5: 6,
        4: 8,
        3: 8,
        2: 7,
        1: 6
      }
    }
  },
  {
    major: {
      name: 'C♯',
      type: 'major',
      keySignature: '7 sharps (F♯, C♯, G♯, D♯, A♯, E♯, B♯)',
      relative: 'A♯ minor',
      notes: ['C♯', 'E♯', 'G♯'],
      progressions: {
        one: 'C♯ - F♯ - G♯',
        two: 'C♯ - A♯m - F♯ - G♯'
      },
      fingerPositions: {
        6: 'X',
        5: 4,
        4: 6,
        3: 6,
        2: 6,
        1: 4
      }
    },
    minor: {
      name: 'A♯',
      type: 'minor',
      keySignature: '7 sharps (F♯, C♯, G♯, D♯, A♯, E♯, B♯)',
      relative: 'C♯ Samaria',
      notes: ['A♯', 'C♯', 'E♯'],
      progressions: {
        one: 'A♯m - D♯m - E♯',
        two: 'A♯m - F♯ - G♯'
      },
      fingerPositions: {
        6: 'X',
        5: 1,
        4: 3,
        3: 3,
        2: 2,
        1: 1
      }
    }
  },
  {
    major: {
      name: 'F',
      type: 'major',
      keySignature: '1 flat (B♭)',
      relative: 'D minor',
      notes: ['F', 'A', 'C'],
      progressions: {
        one: 'F - B♭ - C',
        two: 'F - Dm - B♭ - C'
      },
      fingerPositions: {
        6: 1,
        5: 3,
        4: 3,
        3: 2,
        2: 1,
        1: 1
      }
    },
    minor: {
      name: 'D',
      type: 'minor',
      keySignature: '1 flat (B♭)',
      relative: 'F major',
      notes: ['D', 'F', 'A'],
      progressions: {
        one: 'Dm - Gm - A',
        two: 'Dm - B♭ - C'
      },
      fingerPositions: {
        6: 'X',
        5: 'X',
        4: 0,
        3: 2,
        2: 3,
        1: 1
      }
    }
  },
  {
    major: {
      name: 'B♭',
      type: 'major',
      keySignature: '2 flats (B♭, E♭)',
      relative: 'G minor',
      notes: ['B♭', 'D', 'F'],
      progressions: {
        one: 'B♭ - E♭ - F',
        two: 'B♭ - Gm - E♭ - F'
      },
      fingerPositions: {
        6: 'X',
        5: 1,
        4: 3,
        3: 3,
        2: 3,
        1: 1
      }
    },
    minor: {
      name: 'G',
      type: 'minor',
      keySignature: '2 flats (B♭, E♭)',
      relative: 'B♭ major',
      notes: ['G', 'B♭', 'D'],
      progressions: {
        one: 'Gm - Cm - D',
        two: 'Gm - E♭ - F'
      },
      fingerPositions: {
        6: 3,
        5: 5,
        4: 5,
        3: 3,
        2: 3,
        1: 3
      }
    }
  },
  {
    major: {
      name: 'E♭',
      type: 'major',
      keySignature: '3 flats (B♭, E♭, A♭)',
      relative: 'C minor',
      notes: ['E♭', 'G', 'B♭'],
      progressions: {
        one: 'E♭ - A♭ - B♭',
        two: 'E♭ - Cm - A♭ - B♭'
      },
      fingerPositions: {
        6: 'X',
        5: 6,
        4: 8,
        3: 8,
        2: 8,
        1: 6
      }
    },
    minor: {
      name: 'C',
      type: 'minor',
      keySignature: '3 flats (B♭, E♭, A♭)',
      relative: 'E♭ major',
      notes: ['C', 'E♭', 'G'],
      progressions: {
        one: 'Cm - Fm - G',
        two: 'Cm - A♭ - B♭'
      },
      fingerPositions: {
        6: 'X',
        5: 3,
        4: 5,
        3: 5,
        2: 4,
        1: 3
      }
    }
  },
  {
    major: {
      name: 'A♭',
      type: 'major',
      keySignature: '4 flats (B♭, E♭, A♭, D♭)',
      relative: 'F minor',
      notes: ['A♭', 'C', 'E♭'],
      progressions: {
        one: 'A♭ - D♭ - E♭',
        two: 'A♭ - Fm - D♭ - E♭'
      },
      fingerPositions: {
        6: 4,
        5: 6,
        4: 6,
        3: 5,
        2: 4,
        1: 4
      }
    },
    minor: {
      name: 'F',
      type: 'minor',
      keySignature: '4 flats (B♭, E♭, A♭, D♭)',
      relative: 'A♭ major',
      notes: ['F', 'A♭', 'C'],
      progressions: {
        one: 'Fm - B♭m - C',
        two: 'Fm - D♭ - E♭'
      },
      fingerPositions: {
        6: 1,
        5: 3,
        4: 3,
        3: 1,
        2: 1,
        1: 1
      }
    }
  }
];