# -*- coding: utf-8 -*-
"""
Éditeur de Spyder

Ceci est un script temporaire.
"""

import pretty_midi
import numpy as np

midi = pretty_midi.PrettyMIDI('fichier.mid')

notes = []
for instrument in midi.instruments:
    for note in midi.notes:
        notes.append((note.pitch, note.start, note.end - note.start, note.velocity))

notes = np.array(notes)

hauteurs = [note[0] for note in notes]

#distance = np.linalg.norm(np.array(vecteur1) - np.array(vecteur2))
